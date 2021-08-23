/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';

const ModalComp_L1_Blog = ({ colors, content }) => {
  return (
    <div className="modal-col">
      <h1>{content.title}</h1>
      <BlogNav filterProps={content.filterProps} colors={colors} />
      <div className="table scroll_">
        <BlogEntry blog={content.blog} colors={colors} />
      </div>
    </div>
  );
};

export default ModalComp_L1_Blog;
