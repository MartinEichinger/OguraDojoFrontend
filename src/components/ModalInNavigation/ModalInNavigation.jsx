/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const ModalInNavigation = ({ clickUpDown, nextItem, colors, config, mq, apdx }) => {
  const styleInNav = {
    zIndex: '1052',
    backgroundColor: colors.bgWhite,
    borderRadius: '45px',

    '& .btn-close': {
      width: '45px',
      height: '45px',
      margin: '1px',
      padding: '0px',
      borderRadius: '45px',
      lineHeight: '0',
      position: 'relative',
      right: '0px',
      top: '0px',
      backgroundColor: colors.typoGrey,
      border: 'none',
      outline: 'none',
      zIndex: '1100',

      [mq[2]]: {
        width: '33px',
        height: '33px',
      },

      [mq[1]]: {
        width: '28px',
        height: '28px',
      },

      [mq[0]]: {
        width: '23px',
        height: '23px',
      },
    },

    '& .navItem': {
      width: '145px',
      position: 'relative',
      transform: 'rotate(90deg)',
      color: colors.bgRed50,
      border: `1px solid ${colors.bgWhite}`,
      borderRadius: '25px',

      '& h1': {
        fontSize: '28px',
        cursor: 'pointer',
        fontWeight: 'normal',

        [mq[2]]: {
          fontSize: '24px',
          margin: '0',
        },

        [mq[1]]: {
          fontSize: '20px',
          margin: '0',
        },

        [mq[0]]: {
          fontSize: '16px',
          margin: '0',
        },
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

      [mq[2]]: {
        width: '33px',
        height: '33px',
      },

      [mq[1]]: {
        width: '28px',
        height: '28px',
      },

      [mq[0]]: {
        width: '23px',
        height: '23px',
      },

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
          className={'arrow d-flex align-items-center justify-content-center upArrow' + apdx}
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
          className={'arrow d-flex align-items-center justify-content-center active downArrow' + apdx}
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
