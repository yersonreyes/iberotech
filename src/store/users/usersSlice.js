import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
  },
  reducers: {
    users: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { users } = userSlice.actions;
