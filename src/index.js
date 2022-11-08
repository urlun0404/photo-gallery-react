import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import React from 'react';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
