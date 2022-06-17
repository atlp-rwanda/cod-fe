import { getComments } from '../features/tripComments.feature';
import { addTripComment,getTripComments } from '../../api/tripApi';

const commentsAction = (TripId, comment) => async (dispatch) => {
  const res = await addTripComment(TripId, comment);
  const messages = await getTripComments(TripId);
  if(messages)
    if (messages) {
      dispatch(getComments(messages));
    }
};

export { commentsAction };