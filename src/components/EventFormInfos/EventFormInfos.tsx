import React from 'react';
//import { TextField } from '@mui/material';
import TextField from '../TextField/TextField';

import 'date-fns';

import { format } from 'date-fns';
import { de } from 'date-fns/locale';

const EventFormInfos = ({ inFieldVal, changedData }: { inFieldVal: any; changedData: any }) => {
  const debug = false;

  if (debug) console.log('EventFormInfos: ', inFieldVal, changedData);

  return (
    <React.Fragment>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h3>SEMINAR</h3>
      </div>
      <form>
        {inFieldVal?.slice(0, 5).map((x: any, i: number) => {
          return (
            <TextField
              variant="standard"
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
              readonly={true}
            />
          );
        })}
      </form>

      {/* <h3>Infos</h3> */}
      <form>
        {inFieldVal?.slice(5, 8).map((x: any, i: number) => {
          return (
            <TextField
              variant="standard"
              key={x.id + i}
              color="primary"
              multiline={x.multiline ?? false}
              fullWidth
              id={x.id}
              label={x.label}
              value={changedData[x.name]}
              readonly={true}
            />
          );
        })}
      </form>
    </React.Fragment>
  );
};

export default EventFormInfos;
