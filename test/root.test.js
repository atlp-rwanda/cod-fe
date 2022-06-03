import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

import App from '../src/components/app';

test('on initial render, display something', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});