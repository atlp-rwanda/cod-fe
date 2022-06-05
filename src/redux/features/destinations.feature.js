import { createSlice } from '@reduxjs/toolkit';

export const destinationsSlice = createSlice({
  name: 'mostDestinations',
  initialState: {
    destinations: [],
    loading: true,
    error: false,
  },

  reducers: {
    getMostTraveled: (state, action) => {
      state.destinations = action.payload;
      state.loading = false;
    },
  },
});
export const { getMostTraveled } = destinationsSlice.actions;

export default { destinationsReducer: destinationsSlice.reducer };
