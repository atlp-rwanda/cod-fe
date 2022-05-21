import { render } from './jest.setup'
import userEvent from '@testing-library/user-event'

// test utils file
const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

export default renderWithRouter;