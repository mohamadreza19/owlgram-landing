import type { Locales } from '@/navigation';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Action = PayloadAction<Locales>;

const locale = createSlice({
  name: 'locale',
  initialState: '',
  reducers: {
    setLocale: (_, action: Action) => {
      return action.payload;
    },
  },
});
export const { setLocale } = locale.actions;
export default locale.reducer;
