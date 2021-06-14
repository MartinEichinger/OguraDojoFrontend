import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filterReducer from './filter';
import authReducer from './auth';
import toasty from './middleware/toast';
import api from './middleware/api';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
  },
  middleware: [...getDefaultMiddleware(), toasty, api],
});
