/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: 'trips', tripId: null };

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changeTripId: (state, action) => {
      state.tripId = action.payload;
    },
  },
});

export const { changePage, changeTripId } = pageSlice.actions;
export default pageSlice.reducer;
