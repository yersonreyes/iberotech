import { createSlice } from "@reduxjs/toolkit";

export const tiketSlice = createSlice({
  name: "tiketSlice",
  initialState: {
    tikets: [],
  },
  reducers: {
    tikets: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { tikets } = tiketSlice.actions;
