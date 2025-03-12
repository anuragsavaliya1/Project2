import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home",
};

export const pageSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    home: (state) => {
      state.value = "home";
    },
    reels: (state) => {
      state.value = "reels";
    },
  },
});

// Action creators are generated for each case reducer function
export const { home, reels } = pageSlice.actions;

export default pageSlice.reducer;
