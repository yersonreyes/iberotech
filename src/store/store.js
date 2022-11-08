import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { ticketSlice } from "./ticket/ticketSlice";
import { userSlice } from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ticket: ticketSlice.reducer,
    user: userSlice.reducer,
  },
});
