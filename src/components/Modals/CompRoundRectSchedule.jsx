/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const CompRoundRectSchedule = ({ schedule, style }) => {
  //var schedule = props.content.schedule;

  return (
    <div
      className="item align-items-center d-flex flex-md-row flex-column"
      css={style}
    >
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="wann_24px_outlined.svg" alt="" />
        <p className="red bold">{schedule.title}</p>
      </div>
      <div className="rect d-flex flex-column justify-content-around">
        {schedule.lesson.map((item, i) => {
          return (
            <div className="tab-row d-flex flex-row" key={i}>
              <div className="tab w20">
                <p>{item.day}</p>
              </div>
              <div className="tab w30">
                <p>{item.time}</p>
              </div>
              <div className="tab w50">
                <p>{item.topic}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompRoundRectSchedule;
