/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataType: 'status',
  isPie: true,
  isBar: true,
  data: [],
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    graphPie: (state) => {
      state.isPie = !state.isPie;
    },
    graphBar: (state) => {
      state.isBar = !state.isPie;
    },
    changeDataType: (state, action) => {
      state.dataType = action.payload;
    },
    changeData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { graphBar, graphPie, changeData, changeDataType } = statisticsSlice.actions;
export default { statisticsReducer: statisticsSlice.reducer };
