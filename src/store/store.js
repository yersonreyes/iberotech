import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { ticketSlice } from "./ticket/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ticket: ticketSlice.reducer,
  },
});
