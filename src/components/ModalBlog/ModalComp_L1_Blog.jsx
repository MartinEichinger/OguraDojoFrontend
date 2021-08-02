/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';

const ModalComp_L1_Blog = ({ colors, content }) => {
  return (
    <div className="modal-col d-flex flex-column h-100">
      <h1>{content.title}</h1>
      <BlogNav filterProps={content.filterProps} colors={colors} />
      <div className="table d-flex flex-row flex-wrap justify-content-around scroll_">
        <BlogEntry blog={content.blog} colors={colors} />
      </div>
    </div>
  );
};

export default ModalComp_L1_Blog;
