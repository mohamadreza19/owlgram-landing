import { configureStore } from '@reduxjs/toolkit';
import { locale } from '../features';

const store = configureStore({
  reducer: {
    locale,
  },
});

export default store;
