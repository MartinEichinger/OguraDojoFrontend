import { toast } from 'react-toastify';

const debug = true;

const toasty = (store) => (next) => (action) => {
  if (debug) console.log('toast: ', action);

  if (action.type === 'auth/authRequestFailed') {
    toast.error(`Login - ${action.payload}`);
  } else if (action.type === 'auth/authReceived') {
    toast.success(`Login successful`);
  } else if (action.type === 'auth/loggedOut') {
    toast.success('Logged out successful');
  }
  return next(action);
};

export default toasty;
