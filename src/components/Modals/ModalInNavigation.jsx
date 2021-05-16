/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const ModalInNavigation = ({ clickUpDown, nextItem, colors, config }) => {
  const styleInNav = {
    position: 'absolute',
    width: '47px',
    height: 'calc(90vh + 30px)',
    zIndex: '1052',
    right: '2px',
    backgroundColor: colors.bgWhite,
    borderRadius: '45px',

    '& .btn-close': {
      width: '45px',
      height: '45px',
      margin: '1px',
      borderRadius: '45px',
      lineHeight: '0',
      position: 'relative',
      right: '0px',
      top: '0px',
      backgroundColor: colors.typoGrey,
      border: 'none',
      outline: 'none',
      zIndex: '1100',
    },

    '& .navItem': {
      width: '145px',
      position: 'relative',
      transform: 'rotate(90deg)',
      color: colors.bgGrey,
      border: `1px solid ${colors.bgWhite}`,
      borderRadius: '25px',

      '& h1': {
        fontSize: '28px',
        cursor: 'pointer',
        fontWeight: 'normal',
      },

      '&.active': {
        color: colors.typoRed,
        border: `1px solid ${colors.bgRed}`,

        '& h1': {
          fontWeight: 'bold',
        },
      },
    },

    '& .arrow': {
      position: 'relative',
      width: '45px',
      height: '45px',
      borderRadius: '45px',
      backgroundColor: colors.bgGrey,
      margin: '1px',

      '&.active': {
        backgroundColor: colors.bgRed,
        cursor: 'pointer',
      },
    },
  };

  return (
    <div
      className="inNavigation d-flex flex-column justify-content-between align-items-center"
      css={styleInNav}
    >
      <button
        type="button"
        className="btn-close d-flex flex-row align-items-center justify-content-center"
        data-bs-dismiss="modal"
      >
        <img src="./clear_white.png" alt="" />
      </button>
      {config?.upDown ? (
        <div
          className="arrow upArrowTrain d-flex align-items-center justify-content-center"
          onClick={(e) => clickUpDown('up')}
        >
          <img src="arrow_white_up.png" alt="" />
        </div>
      ) : (
        ''
      )}
      {config?.navItems.map((link, i) => {
        return (
          <div
            className={`navItem ${link}Btn ${
              i === 0 ? 'active' : ''
            } d-flex align-items-center justify-content-center`}
            onClick={(e) => nextItem(link)}
            key={i}
          >
            <h1>{link}</h1>
          </div>
        );
      })}
      {config?.upDown ? (
        <div
          className="arrow downArrowTrain d-flex align-items-center justify-content-center active"
          onClick={(e) => clickUpDown('down')}
        >
          <img src="arrow_white_down.png" alt="" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ModalInNavigation;
