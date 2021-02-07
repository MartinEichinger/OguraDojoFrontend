/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const Footer = () => {
  // BREAKPOINTS
  const breakpoints = [576, 678, 1023, 1280];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  // STYLE
  const styleFooter = {
    color: 'rgba(191,191,191,1)',
    fontFamily: 'Ribeye, cursive',
    padding: '20px',
    zIndex: '1000',
    minWidth: '390px',

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
      fontSize: '14px',

      [mq[1]]: {
        fontSize: '12px',
      },

      [mq[0]]: {
        fontSize: '10px',
      },
    },

    '& .column': {
      marginTop: '20px',
      marginRight: '25px',
    },
  };

  return (
    <footer
      className="Footer fixed-bottom mt-auto py-3 bg-dark-o"
      css={styleFooter}
    >
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-center">
          <h1>
            Ogura Dojo - Tengu Ryu Karate-Do, PanZi Gong, TaiJi Quan, QiGong im
            Herzen des Chiemgaus
          </h1>
          <div className="d-flex flex-row justify-content-around w-75">
            <div className="column">
              <h2>Tengu Ryu Karate-Do</h2>
              <h3>Über Tengu Ryu</h3>
              <h3>Lehrer</h3>
              <h3>Publikationen</h3>
              <h3>Formen</h3>
            </div>
            <div className="column">
              <h2>PanZi Gong</h2>
              <h3>Über PanZi Gong</h3>
              <h3>Lehrer</h3>
              <h3>Publikationen</h3>
              <h3>Formen</h3>
            </div>
            <div className="column">
              <h2>TaiJi Quan</h2>
              <h3>Über Tengu Ryu</h3>
              <h3>Lehrer</h3>
              <h3>Publikationen</h3>
              <h3>Formen</h3>
            </div>
            <div className="column">
              <h2>QiGong</h2>
              <h3>Lehrer</h3>
              <h3>Publikationen</h3>
              <h3>Formen</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
