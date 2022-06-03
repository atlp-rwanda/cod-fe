import dummyReducer from './features/dummy.feature';
import * as Auth from './features/auth.feature';
import * as edit from './features/editTrip.feature';
import { tripReqReducer } from './features/tripReq.feature';
import pageReducer from './views/pages';
import * as profile from './features/profile.feature';
import { searchOptionReducer } from './features/search.feature';

const reducers = {
  dummy: dummyReducer,
  register: Auth.default.registerReducer,
  edit: edit.default.editTripReducer,
  page: pageReducer,
  tripRequests: tripReqReducer,
  searchOptions: searchOptionReducer,
  login: Auth.default.loginReducer,
  profile: profile.default.profileReducer,
};

export default reducers;
