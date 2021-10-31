import axios from 'axios';
import * as actions from '../api';

const debug = false;
const baseURL = process.env.REACT_APP_BACKEND_PATH;

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (debug) console.log('api', action);
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError, headers = '' } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL,
        url,
        method,
        data,
        headers,
      });
      // general
      dispatch(actions.apiCallSuccess(response.data));
      // specific
      if (onSuccess) {
        if (data?.username) response.data.username = data.username;
        dispatch({
          type: onSuccess,
          payload: response.data,
        });
      }
    } catch (error) {
      if (debug) console.log('api/error', error);
      // general
      dispatch(actions.apiCallFailed(error.message));
      // specific
      if (onError)
        dispatch({
          type: onError,
          payload: error.message,
        });
    }
  };

export default api;
