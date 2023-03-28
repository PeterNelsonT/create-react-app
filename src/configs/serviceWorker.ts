/* eslint-disable @typescript-eslint/no-explicit-any */
import { Workbox } from 'workbox-window';

import env from 'configs/env';

const updateServiceWorker = async () => {
  try {
    if (caches) {
      // Service worker cache should be cleared with caches.delete()
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map(async (name) => {
          await caches.delete(name);
        })
      );
    }
  } catch (error) {
    console.log('Failed to clear cache:', error);
  } finally {
    // delete browser cache and hard reload
    window.location.reload();
  }
};

const handleEvent = (event: any) => {
  /**
   * We have the condition — event.isUpdate because we don’t want to show
   * this message on the very first service worker installation,
   * only on the updated
   */
  if (event.isUpdate) {
    console.log('installed: Service Worker update found!');
    updateServiceWorker();
  }
};

const registerServiceWorker = async () => {
  if (env.mode === 'production' && 'serviceWorker' in navigator) {
    try {
      const swUrl = '/sw.js';
      const wb = new Workbox(swUrl);
      wb.addEventListener('installed', handleEvent);

      const showSkipWaitingPrompt = async () => {
        // Assuming the user accepted the update, set up a listener
        // that will reload the page as soon as the previously waiting
        // service worker has taken control.
        wb.addEventListener('controlling', () => {
          // At this point, reloading will ensure that the current
          // tab is loaded under the control of the new service worker.
          // Depending on your web app, you may want to auto-save or
          // persist transient state before triggering the reload.
          console.log('waiting-controlling: Service Worker update found!');
          updateServiceWorker();
        });

        // When `event.wasWaitingBeforeRegister` is true, a previously
        // updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.

        // This code assumes your app has a promptForUpdate() method,
        // which returns true if the user wants to update.
        // Implementing this is app-specific; some examples are:
        // https://open-ui.org/components/alert.research or
        // https://open-ui.org/components/toast.research
        // const updateAccepted = await promptForUpdate();

        // if (updateAccepted) {
        wb.messageSkipWaiting();
        // }
      };

      // Add an event listener to detect when the registered
      // service worker has installed but is waiting to activate.
      wb.addEventListener('waiting', () => {
        showSkipWaitingPrompt();
      });
      await wb.register();
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        registration.addEventListener('updatefound', () => {
          console.log('updatefound: Service Worker update found!');
          updateServiceWorker();
        });
      }
    } catch (e) {}
  }
};

registerServiceWorker();
