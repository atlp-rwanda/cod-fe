/* eslint-disable import/prefer-default-export */
import regeneratorRuntime, { async } from 'regenerator-runtime'; //eslint-disable-line
import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '.';

const addFeedback = createAsyncThunk(
  'accommodations/feedback',
  async ({ accommodationId, feedback }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/v1/accommodations/${accommodationId}/feedback`, { feedback });
      return res.data;
    } catch (error) {
      if (error.response.data !== undefined) {
        return rejectWithValue({ message: error.response.data.Error });
      }
      return rejectWithValue({ message: error });
    }
  }
);

export default addFeedback;
