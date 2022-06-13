/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataType: 'status',
  data: [],
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    changeDataType: (state, action) => {
      state.dataType = action.payload;
    },
    changeData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { changeData, changeDataType } = statisticsSlice.actions;
export default { statisticsReducer: statisticsSlice.reducer };
