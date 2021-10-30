/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { useSelector } from 'react-redux';
import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';

const ModalComp_L1_Blog = ({ colors, content, mq, isAuthenticated }) => {
  const debug = true;

  const blogs = useSelector((state) => state.blogs.blogs);

  if (debug) console.log('ModalComp_L1_Blogs: ', blogs, blogs.length);

  return (
    <div className="modal-col">
      <h1>{content.title}</h1>
      <BlogNav filterProps={content.filterProps} colors={colors} />
      {isAuthenticated && <i className="fas fa-edit red mr-5"></i>}
      <div className="table scroll_">
        <BlogEntry blogs={blogs} colors={colors} isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
};

export default ModalComp_L1_Blog;
