import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import * as Auth from '../src/redux/features/auth.feature'

const {registerReducer } = Auth.default;
const { registerPending, registerSuccess, registerFail} = Auth;

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { register: registerReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }