import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendEmail } from '../../store/email';

const initialFormValues = {
  fullName: '',
  email: '',
  //message: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const debug = true;

  const dispatch = useDispatch();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';

    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'This field is required.';
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is not valid.';
    }

    if ('message' in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? '' : 'This field is required.';

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const getInputValue = (name) => {
    return values[name];
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid = fieldValues.fullName && fieldValues.email;
    Object.values(errors).every((x) => x === '');

    return isValid;
  };

  const handleFormSubmit = (seminar) => {
    if (debug)
      console.log(
        'ContactFormControls/sendEmail: ',
        values['email'],
        values['fullName'],
        seminar
      );
    dispatch(
      sendEmail({ email: values['email'], sender: values['fullName'], seminar })
    );
    if (true) handleSuccess();
    else handleError();
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    getInputValue,
  };
};
