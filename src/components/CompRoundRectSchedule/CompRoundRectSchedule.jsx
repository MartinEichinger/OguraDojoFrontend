import React from 'react';

const CompRoundRectSchedule = ({ schedule }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <TablerIconCalendar stroke="rgb(121,0,0)" />
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

const TablerIconCalendar = ({ stroke = 'black', fill = 'none' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M16 3l0 4" />
      <path d="M8 3l0 4" />
      <path d="M4 11l16 0" />
      <path d="M8 15h2v2h-2z" />
    </svg>
  );
};

export default CompRoundRectSchedule;
