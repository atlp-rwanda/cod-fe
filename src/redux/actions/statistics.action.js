import { getAllTripReq } from '../../api/tripReqApi';
import { changeData } from '../features/statistics.features';

const getTrips = () => async (dispatch) => {
  const res = await getAllTripReq();
  dispatch(changeData(res.data));
};

export { getTrips };
