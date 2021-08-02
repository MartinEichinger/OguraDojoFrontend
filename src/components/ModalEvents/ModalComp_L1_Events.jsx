/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { useSelector } from 'react-redux';
import Events from '../Events/Events';

const ModalComp_L1_Events = ({ colors, content, mq, isAuthenticated }) => {
  const debug = false;

  const events = useSelector((state) => state.events.events);

  if (debug) console.log('ModalComp_L1_Events: ', events, events.length);

  return (
    <div className="modal-col">
      <div className="imageBg"></div>
      <div className="heading d-flex flex-row justify-content-between align-items-center">
        <h1>{content.title}</h1>
        {isAuthenticated && <i className="fas fa-edit red mr-5"></i>}
      </div>
      <div className="tables d-flex flex-column flex-lg-row flex-lg-wrap align-items-center align-items-lg-stretch justify-content-lg-around ">
        {events.length > 0 && <Events events={events} colors={colors} mq={mq} />}
      </div>
    </div>
  );
};

export default ModalComp_L1_Events;
