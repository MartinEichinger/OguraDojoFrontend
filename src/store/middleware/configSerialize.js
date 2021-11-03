const debug = true;

const configSerialize = (store) => (next) => (action) => {
  if (debug) console.log('configStore: ', action);

  var serializableCheck = {
    // Ignore these action types
    // ignoredActions: ['your/action/type'],
    // Ignore these field paths in all actions
    ignoredActionPaths: ['payload.data'],
    // Ignore these paths in the state
    //ignoredPaths: ['payload.data'],
  };

  return next(action);
};

export default configSerialize;
