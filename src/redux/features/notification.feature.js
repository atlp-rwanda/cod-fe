/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notificationArray: [],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notificationArray = action.payload;
    },
  },
});
export const { addNotification } = notificationsSlice.actions;
export default { notificationsReducer: notificationsSlice.reducer };
