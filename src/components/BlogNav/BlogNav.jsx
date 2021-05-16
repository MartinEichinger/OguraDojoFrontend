/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { switchfilter, selectFilter } from '../../features/filter/filterSlice';

const BlogNav = ({ filter, filterProps, colors }) => {
  const filterState = useSelector(selectFilter);
  const dispatch = useDispatch();

  const styleBlogNav = {
    marginTop: '3vh',
    '& .buttons': {
      padding: '0 15px',
      margin: '1vh 0',
      borderRadius: '25px',
      fontSize: '2.5vh',
      border: `0px`,

      '&.active': {
        backgroundColor: colors.bgRed,
        color: colors.bgWhite,
      },
    },
  };

  return (
    <div className="d-flex justify-content-around flex-wrap" css={styleBlogNav}>
      {filterProps.map((item, i) => {
        return item === filterState ? (
          <button
            className="buttons active"
            onClick={() => dispatch(switchfilter(item))}
            key={i}
          >
            {item}
          </button>
        ) : (
          <button
            className="buttons"
            onClick={() => dispatch(switchfilter(item))}
            key={i}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default BlogNav;
