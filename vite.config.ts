import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * Replace env variables in index.html
 * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 */
function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre' as const,
      transform: (html: string): string =>
        html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      htmlPlugin(env),
      VitePWA({
        manifest: {
          short_name: 'React app',
          name: 'React app',
          description: 'React app',
          icons: [
            {
              purpose: 'any maskable',
              src: 'favicon.ico',
              sizes: '64x64 32x32 24x24 16x16',
              type: 'image/x-icon',
            },
            {
              src: 'logo192.png',
              type: 'image/png',
              sizes: '192x192',
            },
            {
              src: 'logo512.png',
              type: 'image/png',
              sizes: '512x512',
            },
          ],
          start_url: './',
          scope: '.',
          display: 'standalone',
          theme_color: '#23272e',
          background_color: '#ffffff',
        },
        includeAssets: ['safari-pinned-tab.svg', 'robots.txt', 'apple-touch-icon.png'],
        // switch to "true" to enable sw on development
        devOptions: {
          enabled: false,
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff,txt}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        },
      }),
      tsconfigPaths(),
      react(),
    ],
    server: {
      port: 9000,
      proxy: {
        [env.VITE_API_PROXY]: {
          target: env.VITE_API,
          rewrite: (path) => path.replace(env.VITE_API_PROXY, ''),
          changeOrigin: true,
          secure: true,
        },
      },
    },
    build: {
      outDir: 'build',
    },
  };
});
