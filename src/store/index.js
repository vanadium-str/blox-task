import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import { tokensSlice } from "./tokens/tokensSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    tokens: tokensSlice.reducer
  },
});
