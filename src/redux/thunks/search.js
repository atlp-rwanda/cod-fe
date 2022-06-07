import { createAsyncThunk } from '@reduxjs/toolkit';
import * as searchApi from '../../api/searchApi';

export const fetchByName = createAsyncThunk('search/byName', async (keyword, thunkAPI) => {
  const response = await searchApi.searchByName(keyword);
  return response.data;
});

export const fetchByEmail = createAsyncThunk('search/byEmail', async (keyword, thunkAPI) => {
  const response = await searchApi.searchByEmail(keyword);
  return response.data;
});

export const fetchByDestination = createAsyncThunk(
  'search/byDestination',
  async (keyword, thunkAPI) => {
    const response = await searchApi.searchByDestination(keyword);
    return response.data;
  }
);

export const fetchByDuration = createAsyncThunk('search/byDuration', async (keyword, thunkAPI) => {
  const response = await searchApi.searchByDuration(keyword);
  return response.data;
});
