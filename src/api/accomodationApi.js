/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { localUrl, token, api } from '.';

const baseURl = localUrl;
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const getAllAccomodations = () => {
  return new Promise(async (resolve, reject) => {
    //eslint-disable-line
    axios
      .get(`${baseURl}v1/accommodations`, config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};

export const fetchOneAccommodation = createAsyncThunk(
  'accommodations/fetchOne',
  async (accommodationId, { rejectWithValue }) => {
    try {
      const res = await api.get(`/v1/accommodations/${accommodationId}`);
      return res.data.data.accommodations;
    } catch (error) {
      if (error.response.data !== undefined) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error);
    }
  }
);
