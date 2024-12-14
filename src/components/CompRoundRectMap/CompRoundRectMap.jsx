import React from 'react';

const CompRoundRectMap = ({ map }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <TablerIconMapPin stroke="rgb(121,0,0)" />
        <p className="red bold">{map.title}</p>
      </div>
      <div className="rect d-flex flex-row scroll_">
        <div className="tab w50 d-flex align-items-center">
          <p>{map.address}</p>
        </div>
        <div className="tab w50 frameless">
          <iframe
            title="training"
            src={map.src}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

const TablerIconMapPin = ({ stroke = 'black', fill = 'none' }) => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  );
};

export default CompRoundRectMap;
