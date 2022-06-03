/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import regeneratorRuntime from 'regenerator-runtime';
import { fetchByName, fetchByEmail, fetchByDestination, fetchByDuration } from '../thunks/search';

// Then, handle actions in your reducers:
const searchOptionsSlice = createSlice({
  name: 'searchOptions',
  initialState: { search: '', trips: null, loading: true, error: false },
  reducers: {
    setKeyword: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByName.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchByName.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(fetchByEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByEmail.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchByEmail.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(fetchByDestination.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByDestination.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchByDestination.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(fetchByDuration.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByDuration.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchByDuration.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { setKeyword } = searchOptionsSlice.actions;
export const searchOptionReducer = searchOptionsSlice.reducer;
