import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';
import ChangeColor from './components/DummyComponent';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
    <ChangeColor />
  </Provider>
);
