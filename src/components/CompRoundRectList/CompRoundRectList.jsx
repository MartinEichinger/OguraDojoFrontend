import React from 'react';
import { IconCoin } from '@tabler/icons-react';

const CompRoundRectList = ({ list }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <IconCoin color={'rgb(121,0,0)'} />
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

export default CompRoundRectList;
