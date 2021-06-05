import axios from 'axios';
import { AUTH_SUCCESS } from './actionTypes';
import { createSlice } from '@reduxjs/toolkit';

const debug = true;

const initialState = {
  type: null,
  token: null,
  error: null,
  loading: false,
  username: null,
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
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('expirationDate', expirationDate);
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

    authSuccess: (state, action) => {
      if (debug) console.log('authSlice/authSuccess', state);
      const { token, username } = action.payload;
      state.type = AUTH_SUCCESS;
      state.token = token;
      state.username = username;
      state.isAuthenticated = true;
    },

    checkAuthTimeout: (state, action) => (dispatch) => {
      if (debug) console.log('authSlice/checkAuthTimeout', action);
      const { expirationDate } = action.payload;
      setTimeout(() => {
        dispatch(logout());
        console.log('Timeout');
      }, expirationDate * 1000);
    },
  },
  // extra reducer
});

export const { login, logout, authStatus, authSuccess, checkAuthTimeout } =
  authSlice.actions;

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
      dispatch(authSuccess({ token: res.data.key, username: username }));
      //dispatch(checkAuthTimeout(30));
    })
    .catch((err) => {
      //dispatch(authFail(err));
      if (debug) console.log('authLoginAsync - error: ', err);
    });
};

/* export const checkAuthTimeout = (expirationDate) => (dispatch) => {
  console.log('Start timeout');
  setTimeout(() => {
    dispatch(logout());
    console.log('Timeout');
  }, expirationDate * 1000);
}; */

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsAuthenticated = (state) => state.auth.value;

export default authSlice.reducer;
