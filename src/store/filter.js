import { createSlice } from '@reduxjs/toolkit';
//import { fetchCount } from './counterAPI';

const initialState = {
  value: 'Alle',
  status: 'idle',
};

export const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    switchfilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchfilter } = slice.actions;

export const selectFilter = (state) => state.filter.value;

export default slice.reducer;
