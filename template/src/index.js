import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from '../testing/reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <>
    {/* Add context here */}
    <App />
  </>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorkerRegistration.register();
