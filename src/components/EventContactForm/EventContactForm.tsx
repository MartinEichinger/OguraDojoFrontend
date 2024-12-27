//import { TextField } from '@mui/material';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import React from 'react';

export const EventContactForm = ({
  inFieldVal,
  event,
  value,
  onChangeEvent,
  errors,
  formIsValid,
  handleFormSubmit,
}: {
  inFieldVal: any;
  event: any;
  value: any;
  onChangeEvent: any;
  errors: any;
  formIsValid: any;
  handleFormSubmit: any;
}) => {
  return (
    <React.Fragment>
      <h3>ANMELDUNG</h3>
      <form autoComplete="off">
        {inFieldVal.map((inputFieldValue: any, index: number) => {
          return (
            <TextField
              variant="standard"
              sx={{
                marginBottom: 1,
              }}
              key={index}
              id={inputFieldValue.id}
              color="primary"
              onChange={(event: any) => onChangeEvent(inputFieldValue.name, event.target.value)}
              onBlur={(event: any) => onChangeEvent(inputFieldValue.name, event.target.value)}
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
          disabled={!formIsValid()}
          size={1}
        >
          Anmelden
        </Button>
      </form>
    </React.Fragment>
  );
};
