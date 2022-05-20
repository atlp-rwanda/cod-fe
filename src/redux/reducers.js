import dummyReducer from './features/dummy.feature';
import * as Auth from './features/auth.feature';

const reducers = {
  dummy: dummyReducer,
  register: Auth.default.registerReducer,
};

export default reducers;
