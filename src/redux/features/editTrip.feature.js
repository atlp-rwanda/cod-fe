/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  message: '',
  editDisabled: true,
};

export const editTripSlice = createSlice({
  name: 'editTrip',
  initialState,
  reducers: {
    buttonDisabled: (state) => {
      state.editDisabled = true;
    },
    buttonEnabled: (state) => {
      state.editDisabled = false;
    },
    editPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    editSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.message = action.payload.message;
      state.editDisabled = true;
    },
    editFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.message = '';
      state.editDisabled = true;
    },
    messageFinish: (state) => {
      state.error = '';
      state.message = '';
    },
  },
});
export const {
  editStart,
  editSuccess,
  editPending,
  editFail,
  editNull,
  messageFinish,
  buttonDisabled,
  buttonEnabled,
} = editTripSlice.actions;
export default { editTripReducer: editTripSlice.reducer };
