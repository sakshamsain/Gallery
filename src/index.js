import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './index.css'; // Optional, if you have global styles

// Get the root element where the app will be mounted
const rootElement = document.getElementById('root');

// Create a root and render your app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
