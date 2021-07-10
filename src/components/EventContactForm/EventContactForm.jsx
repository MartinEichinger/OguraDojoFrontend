import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useFormControls } from '../EventFormControls/EventFormControls';

export const EventContactForm = ({ inFieldVal, style, event }) => {
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    getInputValue,
    errors,
  } = useFormControls();

  const debug = true;

  return (
    <React.Fragment>
      {debug ? console.log('ContactForm: ', inFieldVal) : ''}
      <h3>ANMELDUNG</h3>
      <form autoComplete="off" className={style}>
        {inFieldVal.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              color="primary"
              onChange={handleInputValue}
              onBlur={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              error={errors[inputFieldValue.name]}
              multiline={inputFieldValue.multiline ?? false}
              fullWidth
              rows={inputFieldValue.rows ?? 1}
              value={getInputValue(inputFieldValue.name)}
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
