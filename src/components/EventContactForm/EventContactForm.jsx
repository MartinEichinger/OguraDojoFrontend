import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useFormControls } from './EventContactFormControls';

export const EventContactForm = ({ inputFieldValues, style, event }) => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  const debug = true;

  return (
    <React.Fragment>
      {debug ? console.log('ContactForm: ', inputFieldValues) : ''}
      <h3>ANMELDUNG</h3>
      <form
        autoComplete="off"
        onSubmit={() => handleFormSubmit(event)}
        className={style}
      >
        {inputFieldValues.map((inputFieldValue, index) => {
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
              //autoComplete="none"
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
            />
          );
        })}
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={!formIsValid()}
        >
          Anmelden
        </Button>
      </form>
    </React.Fragment>
  );
};
