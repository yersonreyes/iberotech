import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { tiketSlice } from "./tiket/tiketSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    tikets: tiketSlice.reducer,
  },
});
