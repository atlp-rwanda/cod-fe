import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './components/App';
import ChangeColor from './components/DummyComponent';

import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
    <ChangeColor />
  </Provider>
);



