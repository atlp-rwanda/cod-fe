/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import regeneratorRuntime from 'regenerator-runtime';
import { getUsers, setNewRole } from '../../api/userRoleApi';

// First, create the thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await getUsers();
  return response.data;
});

export const setRole = createAsyncThunk('users/setRole', async (userData) => {
  const response = await setNewRole(userData);
  return response.data;
});

// Then, handle actions in your reducers:
const getUsersSlice = createSlice({
  name: 'allUsers',
  initialState: { users: [], loading: true, error: false },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const setRoleSlice = createSlice({
  name: 'setNewRole',
  initialState: { isRoleUpdated: false, loading: true, error: false },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(setRole.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setRole.fulfilled, (state) => {
      state.isRoleUpdated = true;
      state.loading = false;
    });
    builder.addCase(setRole.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const getUsersReducer = getUsersSlice.reducer;
export const setRoleReducer = setRoleSlice.reducer;
