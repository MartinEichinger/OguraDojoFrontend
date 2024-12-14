import { configureStore } from '@reduxjs/toolkit';
import toasty from './middleware/toast';
import api from './middleware/api';

export const store = configureStore({
  reducer: {},
  //middleware: [...getDefaultMiddleware(), toasty, api, configSerialize],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.data'],
      },
    })
      .concat(toasty)
      .concat(api),
});
