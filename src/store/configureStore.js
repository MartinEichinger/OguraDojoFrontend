import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filterReducer from './filter';
import authReducer from './auth';
import eventsReducer from './events';
import blogsReducer from './blogs';
import toasty from './middleware/toast';
import api from './middleware/api';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
    events: eventsReducer,
    blogs: blogsReducer,
  },
  middleware: [...getDefaultMiddleware(), toasty, api],
});
