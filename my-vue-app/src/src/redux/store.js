import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "../redux/pageSlice/pageSlice";
import pageReducer from "../redux/pageSlice/pageSlice";
export const store = configureStore({
  reducer: {
    path: pageReducer,
  },
});

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux
