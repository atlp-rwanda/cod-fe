import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gender: '',
  language: '',
  currency: '',
  location: '',
  departement: '',
  manager: '',
  birthdate: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: initialState,
  },
  reducers: {
    updatedProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updatedProfile } = profileSlice.actions;
export default { profileReducer: profileSlice.reducer };
