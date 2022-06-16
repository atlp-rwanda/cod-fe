import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'tripComments',
  initialState: {
    comments: [],
    loading: true,
    messagesAvailable: false,
  },

  reducers: {
    getComments: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
      state.messagesAvailable = true;
    },
    addingComment:(state,action)=>{
      state.loading = true;
      state.messagesAvailable = false;
    },
    commentAdded:(state,action)=>{
      state.comments = action.payload;
      state.loading = false;
      state.messagesAvailable = true;
    }
  },
});

export const { getComments,addingComment,commentAdded } = commentsSlice.actions;

export default { commentsReducer: commentsSlice.reducer };