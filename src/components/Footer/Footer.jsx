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

  const contentFooter = {
    heading: 'Ogura Dojo - Tengu Ryu Karate, Panzi Gong, Taiji Quan, Qigong im Herzen des Chiemgaus',
    'link-group': [
      {
        heading: 'Ogura Dojo',
        items: [
          {
            title: 'Training',
            target: '#idModalTraining',
            link: () => selectpage('Training', 'pageTraining'),
          },
          { title: 'Wir', target: '#idModalTraining', link: () => selectpage('Wir', 'pageTraining') },
          { title: 'Blog', target: '#idModalBlog' },
          { title: 'Termine', target: '#idModalEvents' },
        ],
      },
      {
        heading: 'Tengu Ryu Karate',
        items: [
          {
            title: 'Über Tengu Ryu',
            target: '#idModalKarate',
            link: () => selectpage('TenguRyu', 'pageKarate'),
          },
          { title: 'Lehrer', target: '#idModalKarate', link: () => selectpage('Lehrer', 'pageKarate') },
        ],
      },
      {
        heading: 'Panzi Gong',
        items: [{ title: '- leer -' }],
      },
      /*       {
        heading: 'Taiji Quan',
        items: [{ title: '- leer -' }],
      }, */
      /*       {
        heading: 'Qigong',
        items: [{ title: '- leer -' }],
      }, */
      {
        heading: 'Allgemein',
        items: [
          { title: 'Impressum', target: '#idModalImpressum' },
          { title: 'Login', target: '#idModalLogin' },
        ],
      },
    ],
  };

  const selectpage = (page, param) => {
    if (debug) console.log('Footer/selectpage', page);
    select(page, param);
  };

  return (
    <footer className="Footer fixed-bottom mt-auto py-3" css={styleFooter}>
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-center">
          <h1>{contentFooter.heading}</h1>
          <div className="d-flex flex-row justify-content-around w-75">
            {contentFooter['link-group'].map((entry) => {
              return (
                <div className="column d-flex flex-column align-items-start">
                  <h2>{entry.heading}</h2>
                  {entry.items.map((item, i) => {
                    return (
                      <button
                        data-bs-toggle="modal"
                        data-bs-target={item.target}
                        onClick={item.link}
                        key={i}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
