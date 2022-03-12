/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const ModalInNavigation = ({ clickUpDown, nextItem, colors, config, mq, apdx, type }) => {
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
      maxWidth: '165px',
      position: 'relative',
      transform: 'rotate(90deg)',
      color: colors.bgTheme50,
      border: `1px solid ${colors.bgWhite}`,
      borderRadius: '25px',
      padding: '0px 10px',

      '& button': {
        cursor: 'pointer',
        fontWeight: 'normal',
        border: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'inherit',

        [mq[2]]: {
          margin: '0',
        },
      },

      '&.active': {
        color: colors.typoTheme,
        border: `1px solid ${colors.bgTheme}`,

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
        backgroundColor: colors.bgTheme,
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
            className={`navItem ${link}Btn${type} ${
              i === 0 ? 'active' : ''
            } d-flex align-items-center justify-content-center`}
            onClick={(e) => nextItem(link)}
            key={i}
          >
            <button className="big">{link}</button>
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
