import React from 'react';
import { render } from './jest.setup';

import App from '../src/components/app';

test('on initial render, display something', () => {
  render(
      <App />
  );
});