import { createSlice } from "@reduxjs/toolkit";

const NameSlice = createSlice({
  name: "Name",
  initialState: {
    userName: "",
    myChoice: "",
    score: 0,
  },
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },

    updateScore: (state, action) => {
      state.score = action.payload + 1;
    },
    updateMyChoice: (state, action) => {
      state.myChoice = action.payload;
    },
  },
});

export const { updateName, updateScore, updateMyChoice } = NameSlice.actions;
export default NameSlice.reducer;
