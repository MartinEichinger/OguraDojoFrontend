/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root1: {
    '& .MuiTextField-root': {
      width: '25ch',

      '&.id_4, &.id_5': {
        width: '50ch',
      },
    },

    '& .MuiInputLabel-root': {
      margin: '0px 0px 0px 7.5px',
    },

    '& .MuiInput-root': {
      marginTop: '5px',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },

    '& .Mui-focused, & .Mui-focused:after': {
      color: 'black',
    },
  },
  root2: {
    '& .MuiTextField-root': {
      width: '25ch',
    },

    '& .MuiInputLabel-root': {
      margin: '0px 0px 0px 7.5px',
    },

    '& .MuiInput-root': {
      marginTop: '5px',
    },

    '& .MuiFormLabel-root.Mui-error, & .Mui-error:after': {
      color: 'green',
      borderBottomColor: 'green',
    },
  },
}));

const Events = ({ events, colors, mq, styleMisc }) => {
  const [entryData, setEntryData] = useState(events[0]);
  const classes = useStyles();

  const style = {
    width: '45%',
    fontFamily: 'Lato, sans-serif',
    paddingTop: '3vh',

    '&.schedule': {
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,0.5)',

      '& .block': {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: '2vh',
        borderRadius: '5px',
        position: 'relative',
        cursor: 'pointer',

        '&:hover, &:active, &:focus': {
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
          fontSize: '5vh',
          color: 'rgba(255,255,255,1)',
          lineHeight: '4vh',
          marginBottom: '0px',
          padding: '1vh 1vh 0.25vh 1vh',
          textAlign: 'center',
          textShadow: 'none',
        },
        '& h2': {
          fontSize: '3vh',
          color: 'rgba(255,255,255,1)',
          lineHeight: '2vh',
          marginBottom: '0px',
          padding: '0.25vh 1vh 1vh 1vh',
          textAlign: 'center',
        },
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
    },
  };

  const month = [
    'JAN',
    'FEB',
    'MÄR',
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

  const entries1 = ['title', 'location', 'authorized', 'organisator', 'time'];
  const entries2 = ['details'];
  const entries3 = ['email', 'name'];

  const selectEvent = (item) => {
    console.log('Select: ', item.title[1]);
    setEntryData(item);
  };

  return (
    <React.Fragment>
      <div className="schedule d-flex flex-column" css={style}>
        {events.map((item, i) => {
          var d = new Date(item.date[1]);
          return i % 2 === 0 ? (
            <div
              className="block d-flex flex-row"
              key={i}
              onClick={() => selectEvent(item)}
            >
              <div className="date bgRed">
                <h1>{d.getDate()}</h1>
                <h2>{month[d.getMonth()]}</h2>
              </div>
              <div className="details d-flex flex-column align-items-stretch justify-content-between">
                <h3 className="align-self-stretch">{item.title[1]}</h3>
                <div className="d-flex flex-row justify-content-start align-items-baseline">
                  <i className="fas fa-map-marker-alt red"></i>
                  <h4 className="red">{item.location[1]}</h4>
                  <i className="fas fa-user"></i>
                  <h4>{item.organisator[1]}</h4>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="block d-flex flex-row"
              key={i}
              onClick={() => selectEvent(item)}
            >
              <div className="date bgGreen">
                <h1>{d.getDate()}</h1>
                <h2>{month[d.getMonth()]}</h2>
              </div>
              <div className="details d-flex flex-column align-items-stretch justify-content-between">
                <h3 className="align-self-stretch">{item.title[1]}</h3>
                <div className="d-flex flex-row justify-content-start align-items-baseline">
                  <i className="fas fa-map-marker-alt green"></i>
                  <h4 className="green">{item.location[1]}</h4>
                  <i className="fas fa-user"></i>
                  <h4>{item.organisator[1]}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="detail d-flex flex-column" css={style}>
        <h3>SEMINAR</h3>
        <form className={classes.root1}>
          {entries1.map((x, i) => {
            return (
              <TextField
                className={'id_' + i}
                id={'id_' + i}
                label={entryData[x][0]}
                value={entryData[x][1]}
                InputProps={{
                  readOnly: true,
                }}
                key={i}
              />
            );
          })}
        </form>
        <h3>SONSTIGES</h3>
        <form className={classes.root1}>
          {entries2.map((x, i) => {
            return (
              <TextField
                multiline
                className={'id_' + (i + 5)}
                id={'id_' + i}
                label={entryData[x][0]}
                defaultValue={entryData[x][1]}
                InputProps={{
                  readOnly: true,
                }}
                key={i}
              />
            );
          })}
        </form>
        <h3>ANMELDUNG</h3>
        <form className={classes.root2}>
          {entries3.map((x, i) => {
            return (
              <TextField
                error
                className={'id_' + (i + 6)}
                id={'id_' + i}
                label={entryData[x][0]}
                placeholder={entryData[x][1]}
                key={i}
              />
            );
          })}
        </form>
      </div>
    </React.Fragment>
  );
};

export default Events;

/* 
events.map((item, i) => {
  <div className="d-flex flex-column" css={style} key={i}>
    <h5 className="text-center font-weight-bold">
      {item.date} +++ {item.cat} +++ {item.tags}
    </h5>
    <div className="body d-flex flex-row">
      <div
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundPosition: item.imgPos,
        }}
        className="image w-50"
      ></div>
      <div className="text d-flex flex-column w-50 justify-content-center">
        <h4 className="text-center green">{item.cat}</h4>
        <p className="linie text-center"></p>
        <h2 className="text-center">{item.header}</h2>
        <p className="linie text-center"></p>
        <p className="text-center">{item.detail}</p>
      </div>
    </div>
    <a href={item.link} target="_blank" rel="noreferrer" className="button">
      <Button
        variant="contained"
        color={colors.bgRed}
        startIcon={<SubjectOutlinedIcon />}
      >
        Artikel lesen
      </Button>
    </a>
  </div>;
}); */
