import { editFail, editSuccess, editPending, messageFinish } from '../features/editTrip.feature';
import { editTripRequest } from '../../api/tripApi';

const editTrip = (tripId, data) => async (dispatch) => {
  try {
    dispatch(editPending());
    const res = await editTripRequest(tripId, data);
    if (res.status === 200) {
      dispatch(editSuccess({ message: 'Update trip request succesfully' }));
      setTimeout(() => {
        dispatch(messageFinish());
      }, 1500);
    } else {
      dispatch(editFail({ message: 'failed to update trip request. Please try again' }));
      setTimeout(() => {
        dispatch(messageFinish());
      }, 1500);
    }
  } catch (error) {
    dispatch(editFail({ message: 'failed to update trip request. Please try again' }));
    setTimeout(() => {
      dispatch(messageFinish);
    }, 1500);
  }
};
export default editTrip;
