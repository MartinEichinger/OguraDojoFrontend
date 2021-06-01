/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const Footer = ({ colors, select }) => {
  // BREAKPOINTS
  const breakpoints = [576, 678, 1023, 1280];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  // DEBUG
  const debug = false;

  // STYLE
  const styleFooter = {
    color: colors.typoGrey,
    fontFamiliy: 'Lato, cursive',
    padding: '20px',
    zIndex: '1000',
    minWidth: '390px',
    backgroundColor: colors.bgGrey,

    '& i': {
      width: '48px',
      height: '48px',
    },

    [mq[0]]: {
      //display: 'none',
    },

    '& h1': {
      fontSize: '28px',

      [mq[1]]: {
        fontSize: '18px',
      },

      [mq[0]]: {
        fontSize: '16px',
      },
    },

    '& h2': {
      fontSize: '18px',

      [mq[1]]: {
        fontSize: '16px',
      },

      [mq[0]]: {
        fontSize: '14px',
      },
    },

    '& h3': {
      fontSize: '1.1vh',

      [mq[1]]: {
        fontSize: '1vh',
      },

      [mq[0]]: {
        fontSize: '0.9vh',
      },
    },

    '& .column': {
      marginTop: '20px',
      marginRight: '25px',
    },

    '& button': {
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: '1.1vh',
      border: 'none',
      outline: 'none',

      [mq[1]]: {
        fontSize: '1vh',
      },

      [mq[0]]: {
        fontSize: '0.9vh',
      },
    },
  };

  const selectpage = (page, param) => {
    if (debug) console.log('Footer/selectpage', page);
    select(page, param);
  };

  return (
    <footer className="Footer fixed-bottom mt-auto py-3" css={styleFooter}>
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-center">
          <h1>
            Ogura Dojo - Tengu Ryu Karate-Do, PanZi Gong, TaiJi Quan, QiGong im
            Herzen des Chiemgaus
          </h1>
          <div className="d-flex flex-row justify-content-around w-75">
            <div className="column d-flex flex-column align-items-start">
              <h2>Allgemein</h2>
              <button
                data-bs-toggle="modal"
                data-bs-target="#idModalTraining"
                onClick={() => selectpage('Training', 'pageTraining')}
              >
                Training
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#idModalTraining"
                onClick={() => selectpage('Wir', 'pageTraining')}
              >
                Wir
              </button>
              <button data-bs-toggle="modal" data-bs-target="#idModalBlog">
                Tengu Blog
              </button>
              <button data-bs-toggle="modal" data-bs-target="#idModalEvents">
                Veranstaltungen
              </button>
              <button data-bs-toggle="modal" data-bs-target="#idModalLogin">
                Login
              </button>
            </div>
            <div className="column d-flex flex-column align-items-start">
              <h2>Tengu Ryu Karate-Do</h2>
              <button
                data-bs-toggle="modal"
                data-bs-target="#idModalKarate"
                onClick={() => selectpage('TenguRyu', 'pageKarate')}
              >
                Über Tengu-Ryu
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#idModalKarate"
                onClick={() => selectpage('Lehrer', 'pageKarate')}
              >
                Lehrer
              </button>
            </div>
            <div className="column d-flex flex-column">
              <h2>PanZi Gong</h2>
              <h3>- leer -</h3>
            </div>
            <div className="column">
              <h2>TaiJi Quan</h2>
              <h3>- leer -</h3>
            </div>
            <div className="column">
              <h2>QiGong</h2>
              <h3>- leer -</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
