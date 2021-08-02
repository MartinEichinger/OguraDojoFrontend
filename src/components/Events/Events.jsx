/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import { EventContactForm } from '../EventContactForm/EventContactForm';
import EventFormEditSave from '../EventFormEditSave/EventFormEditSave';
import EventFormInfos from '../EventFormInfos/EventFormInfos';
import EventFormSchedule from '../EventFormSchedule/EventFormSchedule';
import { makeStyles } from '@material-ui/core/styles';
import { useCustomStyles } from './Events.style';
import { useFormControls } from './Events.controls';

const useStyles = makeStyles((theme) => ({
  root1: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '& label': {
      fontWeight: 'bold',
    },
  },
  root2: {
    '& > *': {
      margin: theme.spacing(1),
    },

    '& .MuiTextField-root': {
      width: '45%',
    },
  },
}));

const Events = ({ events, colors, mq }) => {
  // constants
  const debug = false;
  if (debug) console.log('Events : ', events, colors, mq);

  // state
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  // style
  const classes = useStyles();
  const style = useCustomStyles({ mq, colors });

  // util data
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'];

  const entries = [
    // part I
    { name: 'title', label: 'Seminar', id: '#title', val_length: 80 },
    { name: 'date', label: 'Termin', id: '#date' },
    { name: 'location', label: 'Ort', id: '#location', val_length: 80 },
    { name: 'organisator', label: 'Ausrichter/Trainer', id: '#organisator', val_length: 80 },
    // part II
    {
      name: 'details',
      label: 'Weitere Infos',
      id: '#details',
      multiline: true,
      multilinerows: 5,
      val_length: 2047,
    },
    { name: 'authorized', label: 'Berechtigt', id: '#authorized', val_length: 40 },
    { name: 'cost', label: 'Gebühr', id: '#cost', val_length: 80 },
    { name: 'other', label: 'Sonstiges', id: '#other', multiline: true, val_length: 1023 },
    // part III
    { name: 'email', label: 'E-Mail', id: '#email', val_email: true },
    { name: 'fullName', label: 'Name', id: '#fullName', val_length: 40 },
  ];

  // methods
  const {
    newEvent,
    selectEvent,
    delEvent,
    saveFormData,
    onChangeEvent,
    onChangeDate,
    setEditData,
    formIsValid,
    handleFormSubmit,
    editData,
    entryData,
    changedData,
    errors,
  } = useFormControls({
    events,
    entries,
  });

  const isAuthEdit = editData && isAuthenticated;
  const isAuthNoEdit = !editData && isAuthenticated;

  return (
    <React.Fragment>
      {events.length > 0 && (
        <div className="schedule d-flex flex-column scroll_" css={style}>
          <EventFormSchedule
            events={events}
            month={month}
            selectEvent={selectEvent}
            delEvent={delEvent}
            isAuthenticated={isAuthenticated}
          />
          {isAuthenticated && (
            <Button
              className={classes.root2}
              variant="contained"
              color="primary"
              onClick={() => newEvent()}
            >
              Neuer Event
            </Button>
          )}
        </div>
      )}
      {events.length > 0 && (
        <div className="detail d-flex flex-column scroll_" css={style}>
          <EventFormInfos
            style={classes.root1}
            inFieldVal={entries.slice(0, 8)}
            isAuthEdit={isAuthEdit}
            isAuthNoEdit={isAuthNoEdit}
            setEditData={setEditData}
            onChangeEvent={onChangeEvent}
            onChangeDate={onChangeDate}
            entryData={entryData}
            changedData={changedData}
            errors={errors}
          />

          {!isAuthEdit && (
            <EventContactForm
              style={classes.root2}
              inFieldVal={entries.slice(8, 10)}
              event={changedData.title}
              value={changedData}
              onChangeEvent={onChangeEvent}
              errors={errors}
              formIsValid={formIsValid}
              handleFormSubmit={handleFormSubmit}
            />
          )}
          {isAuthEdit && (
            <EventFormEditSave
              style={classes.root2}
              saveFormData={saveFormData}
              formIsValid={formIsValid}
            />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Events;
