import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  message: '',
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

export const { registerPending, registerSuccess, registerFail } = registerSlice.actions;
export default { registerReducer: registerSlice.reducer };
