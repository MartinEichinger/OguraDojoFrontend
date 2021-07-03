/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const CompRoundRectMap = ({ map, style }) => {
  return (
    <div
      className="item align-items-center d-flex flex-md-row flex-column"
      css={style}
    >
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="wo_24px_outlined.svg" alt="" />
        <p className="red bold">{map.title}</p>
      </div>
      <div className="rect d-flex flex-row">
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
    </div>
  );
};

export default CompRoundRectMap;
