/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { useSelector } from 'react-redux';
import Events from '../Events/Events';

const ModalComp_L1_Events = ({ colors, content, mq, isAuthenticated }) => {
  const styleCompL1 = {
    '&.comp_l1': {
      width: '100%',
      position: 'absolute',

      '& .modal-col': {
        width: 'calc(100% - 51px)',

        [mq[2]]: {
          width: 'calc(100% - 39px)',
        },

        [mq[1]]: {
          width: 'calc(100% - 34px)',
        },

        [mq[0]]: {
          width: 'calc(100% - 29px)',
        },

        '& h1': {
          fontSize: '10vh',
          marginBottom: '1vh',
          color: colors.bgGrey,
          textShadow: `2px 0 0 ${colors.bgRed}, 0 2px 0 ${colors.bgRed}, -2px 0 0 ${colors.bgRed}, 0 -2px 0 ${colors.bgRed}`,
          position: 'relative',
          paddingTop: '2vh',
          paddingLeft: '2vh',

          [mq[0]]: {
            fontSize: '8vh',
          },
        },

        '& .modal-up': {
          height: '90vh',
          backgroundColor: 'white',
          borderRadius: '5px',

          '& .imageBg': {
            marginTop: '2vh',
            height: '86vh',
            width: 'calc(100% - 51px)',
            backgroundImage: 'url(./main_panzigong.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '5px',
            boxShadow: 'inset 0px 25px 30px 30px white',
            filter: 'blur(4px)',
            position: 'absolute',
          },

          '& .tables': {
            height: '75vh',
            paddingBottom: '3vh',
            position: 'relative',
          },
        },

        /*         '& .frameless': {
          marginTop: '-1vh',
          marginBottom: '-1vh',
        }, */
      },
    },
  };

  const debug = false;

  const events = useSelector((state) => state.events.events);

  if (debug) console.log('ModalComp_L1_Events: ', events, events.length);

  return (
    <div className="comp_l1" css={styleCompL1}>
      <div className="modal-col d-flex flex-column h-100">
        <div className="modal-up">
          <div className="imageBg"></div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h1>{content.title}</h1>
            {isAuthenticated && <i className="fas fa-edit red mr-5"></i>}
          </div>
          <div className="tables d-flex flex-column flex-lg-row flex-lg-wrap align-items-center align-items-lg-stretch justify-content-lg-around ">
            {events.length > 0 && (
              <Events events={events} colors={colors} mq={mq} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComp_L1_Events;
