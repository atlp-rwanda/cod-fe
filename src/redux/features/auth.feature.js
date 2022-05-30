import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  message: '',
};

const loginInitialState = {
  isLoading: false,
  error: '',
  isAuth: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    registerSuccess: (state, payload) => {
      state.isLoading = false;
      state.error = '';
      state.message = payload;
    },
    registerFail: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
      state.message = '';
    },
  },
});

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.isAuth = false;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isAuth = true;
    },
    loginFail: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
    },
  },
});

export const { registerPending, registerSuccess, registerFail } = registerSlice.actions;
export const { loginPending, loginSuccess, loginFail } = loginSlice.actions;

export default { registerReducer: registerSlice.reducer, loginReducer: loginSlice.reducer };
