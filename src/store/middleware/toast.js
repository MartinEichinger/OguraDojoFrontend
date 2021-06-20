import { toast } from 'react-toastify';

const debug = false;

const toasty = (store) => (next) => (action) => {
  if (debug) console.log('toast: ', action);

  // authRequest
  if (action.type === 'auth/authRequestFailed') {
    toast.error(`Login - ${action.payload}`);
  } else if (action.type === 'auth/authReceived') {
    toast.success(`Login successful`);
  } else if (action.type === 'auth/loggedOut') {
    toast.success('Logged out successful');
  }
  // event update
  else if (action.type === 'events/eventsUpdated') {
    toast.success('Event update successful');
  } else if (action.type === 'events/eventsUpdateFailed') {
    toast.error(`Event update failed - ${action.payload}`);
  }
  // event create
  else if (action.type === 'events/eventCreated') {
    toast.success('Event create successful');
  } else if (action.type === 'events/eventCreateFailed') {
    toast.error(`Event create failed - ${action.payload}`);
  }
  // event delete
  else if (action.type === 'events/eventDeleted') {
    toast.success('Event delete successful');
  } else if (action.type === 'events/eventDeleteFailed') {
    toast.error(`Event delete failed - ${action.payload}`);
  }
  return next(action);
};

export default toasty;
