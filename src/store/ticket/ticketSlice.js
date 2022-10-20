import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
  name: "ticketSlice",
  initialState: {
    tickets: [],
  },
  reducers: {
    tickets: (state, { payload }) => {
      state.tickets = payload;
    },
  },
});

export const { tickets } = ticketSlice.actions;
