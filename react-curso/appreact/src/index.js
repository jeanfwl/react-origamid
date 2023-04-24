import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './mais-react/propTypes/App';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; possível omitir usando react-bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
