import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 69,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 69;
    },
    decrement: (state) => {
      state.value -= 69;
    },
    incrementByAmount: (state, action) => {
      if (typeof action.payload == Number) {
        state.value += action.payload;
      } else {
        console.log('passed value is not a number');
      }
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;