import dummyReducer from './features/dummy.feature';
import * as Auth from './features/auth.feature';
import * as edit from './features/editTrip.feature';
import * as statistics from './features/statistics.features';
import { tripReqReducer } from './features/tripReq.feature';
import pageReducer from './views/pages';
import * as profile from './features/profile.feature';
import { searchOptionReducer } from './features/search.feature';
import { getUsersReducer, setRoleReducer } from './features/userRole.feauture';
import * as mostdestionations from './features/destinations.feature';
import * as accommodation from './features/accomodations.feature';

const reducers = {
  dummy: dummyReducer,
  register: Auth.default.registerReducer,
  edit: edit.default.editTripReducer,
  statistics: statistics.default.statisticsReducer,
  page: pageReducer,
  tripRequests: tripReqReducer,
  searchOptions: searchOptionReducer,
  login: Auth.default.loginReducer,
  profile: profile.default.profileReducer,
  users: getUsersReducer,
  setNewRole: setRoleReducer,
  mostDestinations: mostdestionations.default.destinationsReducer,
  allAccomodations: accommodation.default.accommodationReducer,
};

export default reducers;
