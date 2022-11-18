import { createSlice } from "@reduxjs/toolkit";

export const hostSlice = createSlice({
  name: "hostSlice",
  initialState: {
    hosts: [],
  },
  reducers: {
    hosts: (state, { payload }) => {
      state.hosts = payload;
    },
  },
});

export const { hosts } = hostSlice.actions;
