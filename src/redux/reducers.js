import dummyReducer from './features/dummy.feature';
import * as Auth from './features/auth.feature';
import { tripReqReducer } from './features/tripReq.feature';
import pageReducer from './views/pages';
import * as profile from './features/profile.feature';

const reducers = {
  dummy: dummyReducer,
  register: Auth.default.registerReducer,
  page: pageReducer,
  tripRequests: tripReqReducer,
  login: Auth.default.loginReducer,
  profile: profile.default.profileReducer,
};

export default reducers;
