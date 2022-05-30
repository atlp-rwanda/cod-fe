import dummyReducer from './features/dummy.feature';
import * as Auth from './features/auth.feature';
import { tripReqReducer } from './features/tripReq.feature';
import pageReducer from './views/pages';

const reducers = {
  dummy: dummyReducer,
  register: Auth.default.registerReducer,
  page: pageReducer,
  tripRequests: tripReqReducer,
  login: Auth.default.loginReducer,
};

export default reducers;
