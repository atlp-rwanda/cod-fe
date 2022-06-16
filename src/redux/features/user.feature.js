import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedInUser: (state, payload) => {
      state.user = payload.payload;
    },
  },
});

export const { loggedInUser } = userSlice.actions;

export default { userReducer: userSlice.reducer };
