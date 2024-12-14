/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { useSelector } from 'react-redux';
import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';

var dataReady = false;

const ModalComp_L1_Blog = ({ colors, content, mq, isAuthenticated }) => {
  const debug = false;

  const blogs = useSelector((state) => state.blogs.blogs);

  if (blogs.length > 0) dataReady = true;
  if (debug) console.log('ModalComp_L1_Blogs: ', blogs, blogs.length, dataReady);

  return (
    <div className="modal-col">
      <h1 className="bigger">{content.title}</h1>
      <BlogNav filterProps={content.filterProps} colors={colors} />
      <div className="table scroll_">
        {dataReady && <BlogEntry blogs={blogs} colors={colors} isAuthenticated={isAuthenticated} />}
      </div>
    </div>
  );
};

export default ModalComp_L1_Blog;
