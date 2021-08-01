import { Button, TextField } from '@material-ui/core';
import React from 'react';

export const EventContactForm = ({
  inFieldVal,
  style,
  event,
  value,
  onChangeEvent,
  errors,
  formIsValid,
  handleFormSubmit,
}) => {
  const debug = false;

  return (
    <React.Fragment>
      {debug ? console.log('ContactForm: ', inFieldVal) : ''}
      <h3>ANMELDUNG</h3>
      <form autoComplete="off" className={style}>
        {inFieldVal.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              id={inputFieldValue.id}
              color="primary"
              onChange={(event) => onChangeEvent(inputFieldValue.name, event.target.value)}
              onBlur={(event) => onChangeEvent(inputFieldValue.name, event.target.value)}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              error={errors[inputFieldValue.name]}
              multiline={inputFieldValue.multiline ?? false}
              fullWidth
              rows={inputFieldValue.rows ?? 1}
              value={value[inputFieldValue.name]}
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
            />
          );
        })}
        <Button
          variant="contained"
          onClick={() => handleFormSubmit(event)}
          color="primary"
          disabled={!formIsValid()}
        >
          Anmelden
        </Button>
      </form>
    </React.Fragment>
  );
};
