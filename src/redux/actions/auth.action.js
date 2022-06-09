import regeneratorRuntime, { async } from 'regenerator-runtime';
import {
  registerPending,
  registerSuccess,
  registerFail,
  loginPending,
  loginSuccess,
  loginFail,
} from '../features/auth.feature';
import registerUser, { loginUser, googleLoginUser, facebookLoginUser } from '../../api/userApi';

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

export const login = (user) => async (dispatch) => {
  try {
    dispatch(loginPending());
    const res = await loginUser(user);
    return dispatch(loginSuccess(res.message));
  } catch (error) {
    if (error.message) {
      return dispatch(loginFail(error.message));
    }
    return dispatch(loginFail(error.Error));
  }
};

export const googleLogin = (token) => async (dispatch) => {
  try {
    dispatch(loginPending());
    const res = await googleLoginUser(token);
    return dispatch(loginSuccess(res.message));
  } catch (error) {
    if (error.message) {
      return dispatch(loginFail(error.message));
    }
    return dispatch(loginFail(error.Error));
  }
};

export const facebookLogin = (user) => async (dispatch) => {
  try {
    dispatch(loginPending());
    const res = await facebookLoginUser(user);
    return dispatch(loginSuccess(res.message));
  } catch (error) {
    if (error.message) {
      return dispatch(loginFail(error.message));
    }
    return dispatch(loginFail(error.Error));
  }
};

export default register;
