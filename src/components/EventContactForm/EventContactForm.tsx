//import { TextField } from '@mui/material';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import React, { useContext, useState } from 'react';
import { sendData } from '../../helper/api-helper';
import { ThemeContext } from 'styled-components';

export const EventContactForm = ({
  inFieldVal,
  eventinput,
  value,
  onChangeEvent,
  errors,
  formIsValid,
}: {
  inFieldVal: any;
  eventinput: any;
  value: any;
  onChangeEvent: any;
  errors: any;
  formIsValid: any;
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [event] = useState(eventinput.seminar_title);

  var themeContext = useContext(ThemeContext)!;

  const onChange = (name: string, val: string) => {
    if (name === 'email') setEmail(val);
    if (name === 'message') setMessage(val);
    onChangeEvent(name, val);
  };

  const handleFormSubmit = () => {
    const query = `mutation {
      create_message_data_item(data: {
          email_address: "${email}",
          message: "${email}: ich möchte mich zum Lehrgang: ${event} anmelden. ${
      message && 'Weitere Nachricht: ' + message
    }",
      }) 
      {
          id    
      }
      }`;
    email && sendData(query);
  };

  return (
    <React.Fragment>
      <h3>ANMELDUNG</h3>
      <form autoComplete="off">
        {inFieldVal.map((inputFieldValue: any, index: number) => {
          return (
            <TextField
              variant="standard"
              key={index}
              id={inputFieldValue.id}
              color="primary"
              onChange={(e: any) => onChange(inputFieldValue.name, e.target.value)}
              onBlur={(e: any) => onChange(inputFieldValue.name, e.target.value)}
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
          id="eventcontactformbutton"
          variant="contained"
          onClick={() => handleFormSubmit()}
          disabled={!formIsValid()}
          size={1}
          color={themeContext.colors.bgGreen}
        >
          Anmelden
        </Button>
      </form>
    </React.Fragment>
  );
};
