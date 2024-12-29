import React from 'react';
import { IconUser } from '@tabler/icons-react';

const CompRoundRectText = ({ text }) => {
  return (
    <React.Fragment>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <IconUser color="rgb(121,0,0)" />
        <p className="red bold">{text.title}</p>
      </div>
      <div className="rect d-flex align-items-center scroll_">
        <p>{text.text}</p>
      </div>
    </React.Fragment>
  );
};

export default CompRoundRectText;
