/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-16 17:19:45
 * @LastEditTime: 2022-12-24 15:19:15
 */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux"

import "./assets/css/index.less"
import "normalize.css" //样式重置
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
