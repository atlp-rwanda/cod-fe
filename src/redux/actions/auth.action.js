import regeneratorRuntime, { async } from 'regenerator-runtime';
import { registerPending, registerSuccess, registerFail } from '../features/auth.feature';
import registerUser from '../../api/userApi';

const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerPending());
    const res = await registerUser(userData);
    dispatch(registerSuccess(res.Message));
  } catch (error) {
    if (error.message) {
      return dispatch(registerFail(error.message));
    }
    return dispatch(registerFail(error.Error));
  }
};

export default register;
