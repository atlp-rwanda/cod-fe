import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export default configureStore({
  reducer: {
    ...reducers,
    devTools: process.env.NODE_ENV !== 'production',
  },
});
