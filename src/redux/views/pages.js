/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: 'dashboard', tripId: null, searchOption: 'global' };

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload.charAt(0).toLowerCase() + action.payload.slice(1);
    },
    changeTripId: (state, action) => {
      state.tripId = action.payload;
    },
    changeSearchOption: (state, action) => {
      state.searchOption = action.payload;
    },
  },
});

export const { changePage, changeTripId, changeSearchOption } = pageSlice.actions;
export default pageSlice.reducer;
