/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

const BlogNav = ({ filterProps, colors }) => {
  const filterState = filterProps.filterState;

  return (
    <div className="modal-in-nav">
      {filterProps.filterProps.map((item, i) => {
        return item === filterState ? (
          <button className="buttons active" onClick={() => filterProps.setFilterState(item)} key={i}>
            {item}
          </button>
        ) : (
          <button className="buttons" onClick={() => filterProps.setFilterState(item)} key={i}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default BlogNav;
