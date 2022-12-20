/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-16 17:19:45
 * @LastEditTime: 2022-12-20 20:27:02
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/css/index.less"
import "normalize.css" //样式重置

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
