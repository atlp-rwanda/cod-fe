import { accomodations } from '../../api/accomodationsApi';
import { getAccommodations } from '../features/accomodations.feature';

const accommodationsAction = () => async (dispatch) => {
  const res = await accomodations();
  dispatch(getAccommodations(res));
};

export { accommodationsAction };
