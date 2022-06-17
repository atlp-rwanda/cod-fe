import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: initialState,
    updating: false,
    fetching: false,
  },
  reducers: {
    updatedProfile: (state, action) => {
      state.value = action.payload;
      state.fetching = false;
    },
    updatingProfile: (state) => {
      state.updating = true;
      state.fetching = true;
    },
    successUpdate: (state) => {
      state.updating = false;
    },
    fetchingProfile: (state) => {
      state.fetching = true;
    },
  },
});
export const { updatedProfile, updatingProfile, successUpdate, fetchingProfile } =
  profileSlice.actions;
export default { profileReducer: profileSlice.reducer };
