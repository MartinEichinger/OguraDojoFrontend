import React from 'react';

const CompRoundRectList = ({ list }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <TablerIconCoin stroke={'rgb(121,0,0)'} />
        <p className="red bold">{list.title}</p>
      </div>
      <div className="rect list-rows scroll_">
        {list.items.map((item, i) => {
          return (
            <React.Fragment key={i}>
              {i === 0 ? (
                <p className="tab1 bold underline">{item.heading}</p>
              ) : (
                <p>
                  <span className="tab1 bold">{item.heading}</span>
                  {item.listing}
                </p>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const TablerIconCoin = ({ stroke = 'black', fill = 'none' }) => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-coin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
      <path d="M12 7v10" />
    </svg>
  );
};

export default CompRoundRectList;
