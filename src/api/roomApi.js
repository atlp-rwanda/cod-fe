/* eslint-disable import/prefer-default-export */
import { async } from 'regenerator-runtime';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '.';

export const fetchAccommodation = createAsyncThunk(
  'accommodations/fetchAll',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const res = await api.get(`/v1/accommodations`);
      return res.data.data.accommodations;
    } catch (error) {
      if (error.response.data !== undefined) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error);
    }
  }
);

export const fetchRooms = createAsyncThunk(
  'accommodations/fetchRooms',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const res = await api.get(`/v1/rooms?status=available`);
      return res.data.data.data;
    } catch (error) {
      if (error.response.status === 406) {
        return rejectWithValue({ message: error.response.data.Error });
      }
      if (error.response.data !== undefined) {
        return rejectWithValue(error.response.data.data);
      }
      return rejectWithValue({ message: error });
    }
  }
);

export const bookNewRoom = createAsyncThunk(
  'accommodations/bookRoom',
  async ({ tripId, roomId }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/v1/rooms/bookings/new`, { tripId, roomId });
      return res.data;
    } catch (error) {
      if (error.response.data !== undefined) {
        return rejectWithValue(error.response.data.data);
      }
      return rejectWithValue({ message: error });
    }
  }
);

export default bookNewRoom;
