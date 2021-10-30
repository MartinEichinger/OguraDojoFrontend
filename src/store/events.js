import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const debug = false;

// initial state
const initialState = {
  loading: false,
  events: [],
};

// create slice
export const slice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // onStart
    eventsRequested: (state) => {
      state.loading = true;
    },
    eventsUpdateStart: (state) => {
      state.loading = true;
    },
    eventCreateStart: (state) => {
      state.loading = true;
    },
    eventDeleteStart: (state) => {
      state.loading = true;
    },
    // onSuccess
    eventsReceived: (state, action) => {
      if (debug) console.log('events/eventsReceived: ', action.payload);
      action.payload.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      state.events = action.payload;
    },
    eventsUpdated: (state, action) => {
      if (debug) console.log('events/eventsUpdated: ', action.payload);
      const index = state.events.findIndex((event) => event.id === action.payload.id);
      if (debug) console.log('events/eventsUpdated: ', index);
      state.events[index] = action.payload;
      const evArr = state.events;
      evArr.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      state.events = evArr;
      state.loading = false;
    },
    eventCreated: (state, action) => {
      if (debug) console.log('events/eventCreated: ', action.payload);
      const evArr = state.events;
      evArr.push(action.payload);
      //const evArr = state.events;
      evArr.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      state.events = evArr;
      state.loading = false;
    },
    eventDeleted: (state, action) => {
      if (debug) console.log('events/eventDeleted: ', action.payload);
      const newEvents = state.events.filter((item) => item.id !== action.payload.id);
      state.events = newEvents;
    },
    // onError
    eventsRequestFailed: (state) => {
      state.loading = false;
    },
    eventsUpdateFailed: (state) => {
      state.loading = false;
    },
    eventCreateFailed: (state) => {
      state.loading = false;
    },
    eventDeleteFailed: (state) => {
      state.loading = false;
    },
  },
});

// export reducer
export default slice.reducer;

// export actions
export const {
  eventsReceived,
  eventsRequested,
  eventsRequestFailed,
  eventsUpdateStart,
  eventsUpdated,
  eventsUpdateFailed,
  eventCreated,
  eventDeleted,
  eventCreateStart,
  eventDeleteStart,
  eventCreateFailed,
  eventDeleteFailed,
} = slice.actions;

// export action creators
const url = '/api/events/';

// READ
export const getEvents = () => (dispatch) => {
  if (debug) console.log('events/getEvents');
  dispatch(
    apiCallBegan({
      url,
      method: 'get',
      onStart: eventsRequested.type,
      onSuccess: eventsReceived.type,
      onError: eventsRequestFailed.type,
    })
  );
};

// UPDATE
export const updateEvent = (data) => (dispatch) => {
  if (debug) console.log('events/updateEvent: ', data);
  const urlUpdate = url + data.id + '/update';
  dispatch(
    apiCallBegan({
      url: urlUpdate,
      method: 'put',
      data,
      onStart: eventsUpdateStart.type,
      onSuccess: eventsUpdated.type,
      onError: eventsUpdateFailed.type,
    })
  );
};

// CREATE
export const createEvent = (data) => (dispatch) => {
  if (debug) console.log('events/createEvent: ', data);
  //const urlUpdate = url + 'create';
  dispatch(
    apiCallBegan({
      url,
      method: 'post',
      data,
      onStart: eventCreateStart.type,
      onSuccess: eventCreated.type,
      onError: eventCreateFailed.type,
    })
  );
};

// DELETE
export const deleteEvent = (data) => (dispatch) => {
  if (debug) console.log('events/createEvent: ', data);
  const urlUpdate = url + data.id + '/delete';
  dispatch(
    apiCallBegan({
      url: urlUpdate,
      method: 'delete',
      data,
      onStart: eventDeleteStart.type,
      onSuccess: eventDeleted.type,
      onError: eventDeleteFailed.type,
    })
  );
};
