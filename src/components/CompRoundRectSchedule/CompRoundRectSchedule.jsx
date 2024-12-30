import React from 'react';
import { IconCalendarEvent } from '@tabler/icons-react';

const CompRoundRectSchedule = ({ schedule }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <IconCalendarEvent color="rgb(121,0,0)" />
        <p className="red bold">{schedule.title}</p>
      </div>
      <div className="rect tab-rows scroll_">
        {schedule.lesson.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="tab1">
                <p>{item.day}</p>
              </div>
              <div className="tab2">
                <p>{item.time}</p>
              </div>
              <div className="tab3">
                <p>{item.topic}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CompRoundRectSchedule;
