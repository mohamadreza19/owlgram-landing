import type { Locales } from "@/navigation";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Language } from "../shared";
import { RootState } from "../services/store";
const initialState: Language = {
  flag: "",
  id: "",
  title: "",
};
const locale = createSlice({
  name: "locale",
  initialState: initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Language>) => {
      return action.payload; // Update the state with the new locale
    },
  },
});

export const getLocale = (store: RootState) => store.locale;
export const { setLocale } = locale.actions;
export default locale.reducer;
