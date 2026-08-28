import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
