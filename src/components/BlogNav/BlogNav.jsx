/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { switchfilter, selectFilter } from '../../store/filter';

const BlogNav = ({ filter, filterProps, colors }) => {
  const filterState = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className="modal-in-nav d-flex justify-content-around flex-wrap">
      {filterProps.map((item, i) => {
        return item === filterState ? (
          <button className="buttons active" onClick={() => dispatch(switchfilter(item))} key={i}>
            {item}
          </button>
        ) : (
          <button className="buttons" onClick={() => dispatch(switchfilter(item))} key={i}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default BlogNav;
