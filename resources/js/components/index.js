import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './Example';
import reportWebVitals from './reportWebVitals';


if (document.getElementById('example')) {
  ReactDOM.render(<React.StrictMode><Example /></React.StrictMode>,document.getElementById('example'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
