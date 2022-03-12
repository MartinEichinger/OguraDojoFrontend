import React from 'react';
import { TextField } from '@mui/material';

import 'date-fns';
//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import { format } from 'date-fns';
import { de } from 'date-fns/locale';

const EventFormInfos = ({
  style,
  inFieldVal,
  isAuthEdit,
  isAuthNoEdit,
  setEditData,
  onChangeEvent,
  onChangeDate,
  entryData,
  changedData,
  errors,
}) => {
  const debug = false;

  if (debug) console.log('EventFormInfos: ', inFieldVal, changedData);

  return (
    <React.Fragment>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h3>SEMINAR</h3>
        {isAuthNoEdit && <i className="fas fa-edit red mr-5" onClick={() => setEditData(true)}></i>}
      </div>
      <form className={style}>
        {inFieldVal?.slice(0, 4).map((x, i) => {
          return isAuthEdit ? (
            x.label === 'Termin' ? (
              <TextField
                fullWidth
                id={x.id}
                key={x.id + i}
                label={x.label}
                onChange={(event) => onChangeDate(x.name, event.target.value)}
                sx={{
                  marginBottom: 1,
                }}
                type="date"
                value={changedData[x.name]}
                variant="standard"
              />
            ) : (
              <TextField
                fullWidth
                id={x.id}
                key={x.id + i}
                label={x.label}
                variant="standard"
                sx={{
                  marginBottom: 1,
                }}
                //color="primary"
                onChange={(event) => onChangeEvent(x.name, event.target.value)}
                multiline={x.multiline ?? false}
                //error={errors[x.name]}
                value={changedData[x.name]}
                {...(errors[x.name] && {
                  error: true,
                  helperText: errors[x.name],
                })}
              />
            )
          ) : (
            <TextField
              variant="standard"
              sx={{
                marginBottom: 1,
              }}
              key={x.id + i}
              color="primary"
              multiline={x.multiline ?? false}
              fullWidth
              id={x.id}
              label={x.label}
              value={
                x.label === 'Termin'
                  ? format(new Date(changedData[x.name]), 'EEEE, dd.MM.yyyy', {
                      locale: de,
                    })
                  : changedData[x.name]
              }
              InputProps={{
                readOnly: true,
              }}
            />
          );
        })}
      </form>

      <h3>Infos</h3>
      <form className={style}>
        {inFieldVal?.slice(4, 8).map((x, i) => {
          return isAuthEdit ? (
            <TextField
              variant="standard"
              sx={{
                marginBottom: 1,
              }}
              key={x.id + i}
              color="primary"
              onChange={(event) => onChangeEvent(x.name, event.target.value)}
              multiline={x.multiline ?? false}
              minRows={2}
              maxRows={20}
              fullWidth
              id={x.id}
              label={x.label}
              //error={errors[x.name]}
              value={changedData[x.name]}
              {...(errors[x.name] && {
                error: true,
                helperText: errors[x.name],
              })}
            />
          ) : (
            <TextField
              variant="standard"
              sx={{
                marginBottom: 1,
              }}
              key={x.id + i}
              color="primary"
              multiline={x.multiline ?? false}
              minRows={2}
              maxRows={20}
              fullWidth
              id={x.id}
              label={x.label}
              value={entryData[x.name]}
              InputProps={{
                readOnly: true,
              }}
            />
          );
        })}
      </form>
    </React.Fragment>
  );
};

export default EventFormInfos;

/*               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd.MM.yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={changedData[x.name]}
                  onChange={onChangeDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
 */
