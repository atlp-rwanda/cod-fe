/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import bookNewRoom from '../../api/roomApi';
import { fetchAccommodation, fetchRooms, createNewRoom } from '../../api/roomApi';
import { fetchAccommodation, fetchRooms } from '../../api/roomApi';
import { fetchOneAccommodation } from '../../api/accomodationApi';
import addFeedback from '../../api/feedBackApi';

const initialState = {
  accommodations: [],
  oneAccommodation: [],
  rooms: { rooms: [], addSuccess: false, addFail: false },
  feedback: { feedback: '', addFeedbackSuccess: false, addFeedbackFail: false },
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
      state.error = action.payload.message;
    },
    [fetchOneAccommodation.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [fetchOneAccommodation.fulfilled]: (state, action) => {
      state.oneAccommodation = action.payload;
      state.loading = false;
      state.error = '';
    },
    [fetchOneAccommodation.rejected]: (state, action) => {
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
      state.rooms.rooms = action.payload;
    },
    [fetchRooms.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.rooms.rooms = [];
    },
    [bookNewRoom.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.rooms.addSuccess = false;
    },
    [bookNewRoom.fulfilled]: (state) => {
      state.loading = false;
      state.rooms.addSuccess = true;
      state.rooms.addFail = false;
      toast.success('Room booked successfully');
    },
    [bookNewRoom.rejected]: (state, action) => {
      state.loading = false;
      state.rooms.addFail = action.payload.message;
      state.rooms.addSuccess = false;
      toast.error(`Room booking failed: ${action.payload.message}`);
    },
    [createNewRoom.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.rooms.addSuccess = false;
    },
    [createNewRoom.fulfilled]: (state) => {
      state.loading = false;
      state.rooms.addSuccess = true;
      toast.success('Room added successfully');
    },
    [createNewRoom.rejected]: (state, action) => {
      state.loading = false;
      state.rooms.addFail = action.payload;
      state.rooms.addSuccess = false;
      toast.error(`Error! Can't add room!: ${action.payload}`);
    },
    [addFeedback.pending]: (state) => {
      state.loading = true;
      state.error = '';
      state.feedback.addFeedbackSuccess = false;
      state.feedback.addFeedbackFail = false;
    },
    [addFeedback.fulfilled]: (state) => {
      state.loading = false;
      state.rooms.addSuccess = true;
      state.rooms.addFail = false;
      toast.success('Feedback added successfully');
    },
    [addFeedback.rejected]: (state, action) => {
      state.loading = false;
      state.feedback.addFeedbackFail = action.payload.message;
      state.feedback.addFeedbackSuccess = false;
      toast.error(`Adding feedbak failed: ${action.payload.message}`);
    },
  },
});

export default acccommodationSlice.reducer;
