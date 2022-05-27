/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import regeneratorRuntime from 'regenerator-runtime';
import * as tripReqApi from '../../api/tripReqApi';

// First, create the thunk
export const fetchTripReq = createAsyncThunk('trips/fetchTrips', async (thunkAPI) => {
  const response = await tripReqApi.getAllTripReq();
  return response.data;
});

// Then, handle actions in your reducers:
const tripReqSlice = createSlice({
  name: 'tripRequests',
  initialState: { trips: [], loading: true, error: false },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTripReq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTripReq.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTripReq.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const tripReqReducer = tripReqSlice.reducer;
