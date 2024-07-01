import { configureStore } from "@reduxjs/toolkit";
import { locale } from "../features";

const store = configureStore({
  reducer: {
    locale,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
