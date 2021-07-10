import React from 'react';
import { Button } from '@material-ui/core';

const EventFormEditSave = ({ saveFormData }) => {
  const debug = false;

  if (debug) console.log('EventFromEditSave: ', saveFormData);

  return (
    <div className="d-flex flex-row align-items-center mt-5">
      <Button variant="contained" color="primary" onClick={() => saveFormData(true)}>
        save
      </Button>
      <Button variant="contained" color="secondary" onClick={() => saveFormData(false)}>
        delete
      </Button>
    </div>
  );
};

export default EventFormEditSave;
