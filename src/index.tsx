import React from 'react';
import ReactDOM from 'react-dom';
// import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import './bootstrap.min.css';
import App from './App';

// new WOW.WOW({
//   live: false
// }).init();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
