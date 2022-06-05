import { createSlice } from '@reduxjs/toolkit';

export const accommodationSlice = createSlice({
  name: 'allAccommodations',
  initialState: {
    accommodations: [],
  },

  reducers: {
    getAccommodations: (state, action) => {
      state.accommodations = action.payload;
    },
  },
});
export const { getAccommodations } = accommodationSlice.actions;

export default { accommodationReducer: accommodationSlice.reducer };
