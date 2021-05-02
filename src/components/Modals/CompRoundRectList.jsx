import React from 'react';

const CompRoundRectList = ({ list }) => {
  return (
    <div className="item align-items-center d-flex flex-md-row flex-column">
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="geld_24px_outlined.svg" alt="" />
        <p className="red bold">{list.title}</p>
      </div>
      <div className="rect h15">
        <div className="tab-row d-flex flex-row">
          {list.items.map((item, i) => {
            return (
              <div className="tab w33" key={i}>
                <p className="bold underline">
                  {item.heading[0]}
                  <span className="span_vis">{item.heading[1]}</span>
                </p>
                {item.listing.map((it, i) => {
                  return <p key={i}>{it}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompRoundRectList;
