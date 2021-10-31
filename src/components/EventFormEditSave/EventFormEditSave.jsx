import React from 'react';
import { Button } from '@mui/material';

const EventFormEditSave = ({ saveFormData, style, formIsValid }) => {
  const debug = true;

  if (debug) console.log('EventFromEditSave: ', style);

  return (
    <form className={style}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => saveFormData(true)}
        disabled={!formIsValid()}
      >
        save
      </Button>
      <Button variant="contained" color="secondary" onClick={() => saveFormData(false)}>
        delete
      </Button>
    </form>
  );
};

export default EventFormEditSave;
