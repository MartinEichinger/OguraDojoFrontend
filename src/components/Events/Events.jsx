/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { format } from 'date-fns';
//import { registerLocale } from 'react-datepicker';
import { de } from 'date-fns/locale';
//registerLocale('de', de);
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import DateFnsUtils from '@date-io/date-fns';
//import {
//  MuiPickersUtilsProvider,
//  KeyboardDatePicker,
//} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { updateEvent, createEvent, deleteEvent } from '../../store/events';
//import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root1: {
    '& > *': {
      margin: theme.spacing(1),
    },

    '& .MuiTextField-root': {
      width: '95%',
      padding: 0,
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(0,0,0,1)',
    },

    '& label': {
      color: 'rgba(0,0,0,1)',
      fontWeight: 'bold',
      '&.Mui-focused': {
        color: 'rgba(0,0,0,1)',
      },
    },

    '& .active': {
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(19,73,0,1)',
      },

      '& label': {
        color: 'rgba(19,73,0,1)',
        '&.Mui-focused': {
          color: 'rgba(19,73,0,1)',
        },
      },
    },
  },
  root2: {
    '& .MuiTextField-root': {
      //width: '25ch',
    },

    '& .MuiInputLabel-root': {
      //margin: '0px 0px 0px 7.5px',
    },

    '& .MuiInput-root': {
      //marginTop: '5px',
    },

    '& .MuiFormLabel-root.Mui-error, & .Mui-error:after': {
      color: 'green',
      borderBottomColor: 'green',
    },
  },
  root3: {
    marginTop: '1vh',

    '&.MuiButton-contained': {
      backgroundColor: 'rgba(19, 73, 0, 1)',
      color: 'rgba(255,255,255,0.87)',
      fontSize: '1.25vh',
      fontWeight: 'bold',
    },
    '&.MuiButton-root': {
      padding: '0px',
      maxWidth: '150px',
    },
  },
}));

const Events = ({ events, colors, mq, styleMisc }) => {
  // constants
  const debug = false;

  // state
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const [entryData, setEntryData] = useState(events[0]);
  const [editData, setEditData] = useState(false);
  const [changedData, setChangedData] = useState(events[0]);

  const isAuthenticatedEdit = editData && isAuthenticated;
  const isAuthenticatedNoEdit = !editData && isAuthenticated;

  // style
  const classes = useStyles();

  if (debug) console.log('Events : ', events);
  const style = {
    width: '45%',
    height: '100%',
    fontFamily: 'Lato, sans-serif',
    paddingTop: '3vh',
    overflow: 'auto',

    [mq[2]]: {
      width: '90%',
      marginBottom: '1vh',
      height: '50%',
    },

    '&.schedule': {
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,0.5)',

      '& .block': {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: '2vh',
        borderRadius: '5px',
        position: 'relative',
        cursor: 'pointer',

        '&:hover, &:active, &:focus, &.active': {
          backgroundColor: colors.bgGreen50,
        },

        '& .date': {
          marginLeft: '5%',
          width: '25%',
          //backgroundColor: colors.bgRed,
        },

        '& .details': {
          height: '100%',
          width: '70%',
          padding: '1vh',

          '& h3': {
            fontSize: '2.5vh',
            fontWeight: 'bold',
          },

          '& h4': {
            fontSize: '1vh',
            fontWeight: 'bold',
            margin: '1vh',
          },
        },

        '& h1': {
          fontSize: '6vh',
          color: 'rgba(255,255,255,1)',
          lineHeight: '4vh',
          marginBottom: '0px',
          padding: '1vh 1vh 0.25vh 1vh',
          textAlign: 'center',
          textShadow: 'none',
        },
        '& h2': {
          fontSize: '4vh',
          color: 'rgba(255,255,255,1)',
          lineHeight: '3vh',
          marginBottom: '0px',
          padding: '0.25vh 1vh 1vh 1vh',
          textAlign: 'center',
        },
      },

      '& button': {
        position: 'absolute',
        bottom: '5vh',
        left: '7.5vh',
      },
    },

    '&.detail': {
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,0.5)',
      padding: '2vh',

      '& h3': {
        textDecoration: 'underline',
        margin: '1vh 0vh',
      },

      '& i': {
        cursor: 'pointer',
      },

      '& button': {
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '3px',
        '&.red': {
          border: `1px solid ${colors.bgRed}`,
          color: 'white',
        },
        '&.green': {
          border: `1px solid ${colors.bgGreen}`,
          color: 'white',
        },
      },
    },
  };

  // util data
  const month = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAI',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OKT',
    'NOV',
    'DEZ',
  ];

  const entries1 = [
    ['title', 'Seminar'],
    //['time', 'Zeit'],
    ['date', 'Termin'],
    ['location', 'Ort'],
    //
    ['organisator', 'Ausrichter/Trainer'],
  ];
  const entries2 = [
    ['details', 'Weitere Infos'],
    ['authorized', 'Berechtigt'],
    ['cost', 'Gebühr'],
  ];
  const entries3 = [['other', 'Sonstiges']];
  const entries4 = [
    ['email', 'E-Mail'],
    ['name', 'Name'],
  ];

  // methods
  const selectEvent = (item) => {
    if (debug) console.log('Select event: ', item.title);
    setEntryData(item);
    setChangedData(item);
  };

  const newEvent = () => {
    const item = {
      authorized: 'z.B. nur CRB Mitglieder',
      date: '2021-01-01',
      details: 'z.B. was ist mitzubringen oder Details zum Seminar',
      id: 'none',
      location: 'z.B. Traunreut, Sonnenschule',
      organisator: 'z.B. Uli Geuder',
      time: 'z.B. welcher Tag Start und Ende',
      title: 'Neuer Event',
    };

    if (debug) console.log('New event: ', item.title);
    //setEntryData(item);
    setChangedData(item);
    setEditData(true);
  };

  const onChangeEvent = (id, attr, val) => {
    if (debug) console.log('Events/onChangeEvent: ', id, attr, val);
    //const [event2Change] = events.filter((item) => item.id === id);
    const obj = {
      ...changedData,
      [attr]: val,
    };

    setChangedData(obj);
  };

  const dispatch = useDispatch();

  const saveData = (save) => {
    setEditData(false);
    if (save) {
      console.log('save data: ', changedData);
      if (changedData['id'] === 'none') {
        setEntryData(changedData);
        dispatch(createEvent(changedData));
      } else {
        setEntryData(changedData);
        dispatch(updateEvent(changedData));
      }
    } else {
      console.log('dont save data: ', entryData);
      setChangedData(entryData);
    }
  };

  const delData = (item) => {
    dispatch(deleteEvent(item));
  };

  return (
    <React.Fragment>
      {events.length > 0 && (
        <div className="schedule d-flex flex-column scroll_" css={style}>
          {events.map((item, i) => {
            var d = new Date(item.date);
            return i % 2 === 0 ? (
              <div
                className="block d-flex flex-row"
                key={i}
                onClick={() => selectEvent(item)}
              >
                <div className="date bgRed d-flex flex-column justify-content-center align-items-center">
                  <h1>{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
                <div className="details d-flex flex-column align-items-stretch justify-content-between">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="align-self-stretch">{item.title}</h3>
                    {isAuthenticated && (
                      <i
                        className="far red fa-trash-alt  mr-3"
                        onClick={() => delData(item)}
                      ></i>
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
              <div
                className="block d-flex flex-row"
                key={i}
                onClick={() => selectEvent(item)}
              >
                <div className="date bgGreen d-flex flex-column justify-content-center align-items-center">
                  <h1>{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
                <div className="details d-flex flex-column align-items-stretch justify-content-between">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="align-self-stretch">{item.title}</h3>
                    {isAuthenticated && (
                      <i
                        className="far red fa-trash-alt mr-3"
                        onClick={() => delData(item)}
                      ></i>
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
            <Button
              className={classes.root3}
              variant="contained"
              onClick={() => newEvent()}
            >
              Neuer Event
            </Button>
          )}
        </div>
      )}
      {events.length > 0 && (
        <div className="detail d-flex flex-column scroll_" css={style}>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h3>SEMINAR</h3>
            {isAuthenticatedNoEdit && (
              <i
                className="fas fa-edit red mr-5"
                onClick={() => setEditData(true)}
              ></i>
            )}
          </div>
          <form className={classes.root1}>
            {entries1.map((x, i) => {
              return isAuthenticatedEdit ? (
                <TextField
                  // eslint-disable-next-line
                  className={'active' + ' id_1_' + i}
                  id={'id_1_' + i}
                  label={x[1]}
                  value={
                    x[1] === 'Termin'
                      ? format(new Date(changedData[x[0]]), 'dd.MM.yyyy', {
                          locale: de,
                        })
                      : changedData[x[0]]
                  }
                  key={'tf_' + i}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) =>
                    onChangeEvent(entryData['id'], x[0], event.target.value)
                  }
                />
              ) : (
                <TextField
                  className={'id_1_' + i}
                  id={'id_1_' + i}
                  label={x[1]}
                  value={
                    x[1] === 'Termin'
                      ? format(
                          new Date(changedData[x[0]]),
                          'eeee, dd.MM.yyyy',
                          { locale: de }
                        )
                      : changedData[x[0]]
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                  key={'id_1_' + i}
                />
              );
            })}
          </form>
          <h3>Infos</h3>
          <form className={classes.root1}>
            {entries2.map((x, i) => {
              return isAuthenticatedEdit ? (
                <TextField
                  multiline
                  className={'id_2_' + (i + 5)}
                  id={'id_2_' + i}
                  label={x[1]}
                  value={changedData[x[0]]}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) =>
                    onChangeEvent(entryData['id'], x[0], event.target.value)
                  }
                  key={'id_2_' + i}
                />
              ) : (
                <TextField
                  multiline
                  className={'id_2_' + (i + 5)}
                  id={'id_2_' + i}
                  label={x[1]}
                  value={entryData[x[0]]}
                  InputProps={{
                    readOnly: true,
                  }}
                  key={'id_2_' + i}
                />
              );
            })}
          </form>
          <h3>Sonstiges</h3>
          <form className={classes.root1}>
            {entries3.map((x, i) => {
              return isAuthenticatedEdit ? (
                <TextField
                  multiline
                  className={'id_2_' + (i + 5)}
                  id={'id_2_' + i}
                  label={x[1]}
                  value={changedData[x[0]]}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) =>
                    onChangeEvent(entryData['id'], x[0], event.target.value)
                  }
                  key={'id_2_' + i}
                />
              ) : (
                <TextField
                  multiline
                  className={'id_2_' + (i + 5)}
                  id={'id_2_' + i}
                  label={x[1]}
                  value={entryData[x[0]]}
                  InputProps={{
                    readOnly: true,
                  }}
                  key={'id_2_' + i}
                />
              );
            })}
          </form>
          {!isAuthenticatedEdit && (
            <React.Fragment>
              <h3>ANMELDUNG</h3>
              <form className={classes.root2}>
                {entries4.map((x, i) => {
                  return (
                    <TextField
                      error
                      className={'id_3_' + (i + 6)}
                      id={'id_3_' + i}
                      label={x[1]}
                      placeholder={entryData[x[0]]}
                      key={'id_3_' + i}
                    />
                  );
                })}
              </form>
            </React.Fragment>
          )}
          {!isAuthenticatedEdit && (
            <Button className={classes.root3} variant="contained">
              Anmelden
            </Button>
          )}
          {isAuthenticatedEdit && (
            <div className="d-flex flex-row align-items-center mt-5">
              <button className="green mr-1" onClick={() => saveData(true)}>
                save
              </button>
              <button className="red mr-5" onClick={() => saveData(false)}>
                delete
              </button>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Events;
