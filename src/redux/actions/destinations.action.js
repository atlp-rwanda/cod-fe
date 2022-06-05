import { mostTraveled } from '../../api/accomodationsApi';
import { getMostTraveled } from '../features/destinations.feature';

const mostDestinationsAction = () => async (dispatch) => {
  const res = await mostTraveled();
  dispatch(getMostTraveled(res));
};

export { mostDestinationsAction };
