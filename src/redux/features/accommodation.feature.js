/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import bookNewRoom from '../../api/roomApi';
import { fetchAccommodation, fetchRooms } from '../../api/roomApi';

const initialState = {
  accommodations: [],
  rooms: { rooms: [], addSuccess: false, addFail: false },
  loading: false,
  error: '',
};

const acccommodationSlice = createSlice({
  name: 'accommodation',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAccommodation.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [fetchAccommodation.fulfilled]: (state, action) => {
      state.accommodations = action.payload;
      state.loading = false;
      state.error = '';
    },
    [fetchAccommodation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchRooms.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [fetchRooms.fulfilled]: (state, action) => {
      state.rooms.rooms = action.payload;
      state.loading = false;
    },
    [fetchRooms.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [bookNewRoom.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.rooms.addSuccess = false;
    },
    [bookNewRoom.fulfilled]: (state) => {
      state.loading = false;
      state.rooms.addSuccess = true;
      toast.success('Room booked successfully');
    },
    [bookNewRoom.rejected]: (state, action) => {
      state.loading = false;
      state.rooms.addFail = action.payload.message;
      state.rooms.addSuccess = false;
      toast.error(`Room booking failed: ${action.payload.message}`);
    },
  },
});

export default acccommodationSlice.reducer;
