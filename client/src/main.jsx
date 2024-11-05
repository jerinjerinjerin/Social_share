import React from 'react';  // Import React
import ReactDOM from 'react-dom/client';  // Import ReactDOM for rendering
import App from './App';  // Import the main App component
import { HelmetProvider } from 'react-helmet-async';  // Import HelmetProvider from react-helmet-async

// Render the root of your application wrapped in HelmetProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />  {/* Your main App component */}
    </HelmetProvider>
  </React.StrictMode>
);
