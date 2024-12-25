import React from 'react';
//import { TextField } from '@mui/material';
import TextField from '../TextField/TextField';

import 'date-fns';

import { format } from 'date-fns';
import { de } from 'date-fns/locale';

const EventFormInfos = ({ style, inFieldVal, changedData }) => {
  const debug = false;

  if (debug) console.log('EventFormInfos: ', inFieldVal, changedData);

  return (
    <React.Fragment>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h3>SEMINAR</h3>
      </div>
      <form className={style}>
        {inFieldVal?.slice(0, 5).map((x, i) => {
          return (
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
                  ? format(new Date(changedData[x?.name]), 'EEEE, dd.MM.yyyy', {
                      locale: de,
                    })
                  : changedData[x?.name]
              }
              InputProps={{
                readOnly: true,
              }}
            />
          );
        })}
      </form>

      {/* <h3>Infos</h3> */}
      <form className={style}>
        {inFieldVal?.slice(5, 8).map((x, i) => {
          return (
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
              value={changedData[x.name]}
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
