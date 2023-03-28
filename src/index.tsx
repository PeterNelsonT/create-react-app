import 'configs/serviceWorker';
import 'styles/index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div>React App</div>
  </React.StrictMode>
);
