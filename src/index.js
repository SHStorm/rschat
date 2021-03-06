import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import store from './redux/store';

import App from './App';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
