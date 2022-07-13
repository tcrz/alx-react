import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const root_notif = ReactDOM.createRoot(document.getElementById('root-notifications'));
root_notif.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

