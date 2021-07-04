/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const CompRoundRectText = ({ text, style }) => {
  return (
    <div
      className="item align-items-center d-flex flex-md-row flex-column justify-content-between"
      css={style}
    >
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="was_24px_outlined.svg" alt="" />
        <p className="red bold">{text.title}</p>
      </div>
      <div className="rect d-flex align-items-center scroll_">
        <p>{text.text}</p>
      </div>
    </div>
  );
};

export default CompRoundRectText;
