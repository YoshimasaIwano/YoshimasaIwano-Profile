import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* css import  */
import './tachyons.css';
import './index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEl
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
