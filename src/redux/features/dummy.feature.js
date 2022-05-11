import { createSlice } from "@reduxjs/toolkit";

const initialState =  {color:""};

export const dummySlice = createSlice({
    name: "dummy",
    initialState: initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload;
        },
        resetColor: (state) => {
            state.color = "black";
        },
    },
})

export const {changeColor,resetColor} = dummySlice.actions;
export default dummySlice.reducer;
