/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import { EventContactForm } from '../EventContactForm/EventContactForm';
import EventFormEditSave from '../EventFormEditSave/EventFormEditSave';
import EventFormInfos from '../EventFormInfos/EventFormInfos';
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
  root3: {
    '& > *': {
      margin: theme.spacing(1),
      //padding: theme.spacing(1),
    },
    //marginTop: '1vh',

    '&.MuiButton-contained': {
      backgroundColor: 'rgba(19, 73, 0, 1)',
      color: 'rgba(255,255,255,0.87)',
      fontSize: '1.75vh',
      //fontWeight: 'bold',
    },
    '&.MuiButton-root': {
      paddingRight: '1vh',
      maxWidth: '150px',
      //paddingLeft
      marginLeft: '7.5px',
    },
  },
}));

const Events = ({ events, colors, mq }) => {
  // constants
  const debug = true;
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
    { name: 'details', label: 'Weitere Infos', id: '#details', multiline: true, val_length: 511 },
    { name: 'authorized', label: 'Berechtigt', id: '#authorized', val_length: 40 },
    { name: 'cost', label: 'Gebühr', id: '#cost', val_length: 80 },
    { name: 'other', label: 'Sonstiges', id: '#other', multiline: true, val_length: 511 },
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
          {events.map((item, i) => {
            var d = new Date(item.date);
            return i % 2 === 0 ? (
              <div className="block d-flex flex-row" key={i} onClick={() => selectEvent(item)}>
                <div className="date bgRed d-flex flex-column justify-content-center align-items-center">
                  <h1>{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
                <div className="details d-flex flex-column align-items-stretch justify-content-between">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="align-self-stretch">{item.title}</h3>
                    {isAuthenticated && (
                      <i className="far red fa-trash-alt  mr-3" onClick={() => delEvent(item)}></i>
                    )}
                  </div>
                  <div className="d-flex flex-row justify-content-start align-items-baseline">
                    <i className="fas fa-map-marker-alt red"></i>
                    <h4 className="red">{item.location}</h4>
                    <i className="fas fa-user"></i>
                    <h4>{item.organisator}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div className="block d-flex flex-row" key={i} onClick={() => selectEvent(item)}>
                <div className="date bgGreen d-flex flex-column justify-content-center align-items-center">
                  <h1>{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
                <div className="details d-flex flex-column align-items-stretch justify-content-between">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="align-self-stretch">{item.title}</h3>
                    {isAuthenticated && (
                      <i className="far red fa-trash-alt mr-3" onClick={() => delEvent(item)}></i>
                    )}
                  </div>
                  <div className="d-flex flex-row justify-content-start align-items-baseline">
                    <i className="fas fa-map-marker-alt green"></i>
                    <h4 className="green">{item.location}</h4>
                    <i className="fas fa-user"></i>
                    <h4>{item.organisator}</h4>
                  </div>
                </div>
              </div>
            );
          })}
          {isAuthenticated && (
            <Button className={classes.root3} variant="contained" onClick={() => newEvent()}>
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
