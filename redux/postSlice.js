import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  pending: false,
  error: false,
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    dataGetStart: (state) => {
      state.pending = true;
    },
    allPost: (state, action) => {
      state.pending = false;
      state.value = action.payload;
    },
    error: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});
export const { allPost, dataGetStart, error } = postSlice.actions;
export default postSlice.reducer;
