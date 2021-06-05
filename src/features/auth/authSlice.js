import axios from 'axios';
import * as actionTypes from './actionTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const debug = true;

const initialState = {
  token: null,
  error: null,
  loading: false,
  username: '',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      if (debug) console.log('authSlice/login');
      const { token, username } = action.payload;
      //const config = JSON.parse(res.config.data);
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('expirationDate', expirationDate);

      //dispatch(authSuccess(token, config.username));
      //dispatch(checkAuthTimeout(3600));
      if (debug) console.log('login - 2');
      state.isAuthenticated = true;
    },

    logout: (state) => {
      if (debug) console.log('authSlice/logout', state);
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('expirationDate');
      state.isAuthenticated = false;
    },

    authStatus: (state) => {
      if (debug) console.log('authSlice/authStatus', state);
      if (localStorage.getItem('token') != null) state.isAuthenticated = 'true';
    },
  },
  // extra reducer
});

export const { login, logout, authStatus } = authSlice.actions;

// Thunk
export const authLoginAsync = (username, password) => (dispatch) => {
  if (debug)
    console.log(
      'authLoginAsync',
      username,
      password,
      process.env.REACT_APP_BACKEND_PATH
    );
  axios
    .post(process.env.REACT_APP_BACKEND_PATH + 'rest-auth/login/', {
      username: username,
      password: password,
    })
    .then((res) => {
      dispatch(login({ token: res.data.key, username: username }));
    })
    .catch((err) => {
      //dispatch(authFail(err));
      if (debug) console.log('authLoginAsync - error: ', err);
    });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsAuthenticated = (state) => state.auth.value;

export default authSlice.reducer;
