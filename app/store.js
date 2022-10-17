import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";


export const store = configureStore({
  reducer: {
    // reducer declaration
    counter : counterSlice,
  },
});
