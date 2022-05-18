import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AllRoutes from './routes';
import store from './redux/store';
import './css/App.css';
import './styles/index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <AllRoutes />
  </Provider>
);
