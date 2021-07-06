import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const debug = false;

// initial state
const initialState = {
  loading: false,
};

// create slice
export const slice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    // onStart
    emailSendStart: (state) => {
      state.loading = true;
    },
    // onSuccess
    emailSended: (state, action) => {
      state.loading = false;
    },
    // onError
    emailSentFailed: (state) => {
      state.loading = false;
    },
  },
});

// export reducer
export default slice.reducer;

// export actions
export const { emailSendStart, emailSended, emailSentFailed } = slice.actions;

// export action creators
const url = '/api/email/';

// CREATE
export const sendEmail = (data) => (dispatch) => {
  if (debug) console.log('email/emailSending: ', data);
  //const urlUpdate = url + 'create';
  dispatch(
    apiCallBegan({
      url,
      method: 'post',
      data,
      onStart: emailSendStart.type,
      onSuccess: emailSended.type,
      onError: emailSentFailed.type,
    })
  );
};
