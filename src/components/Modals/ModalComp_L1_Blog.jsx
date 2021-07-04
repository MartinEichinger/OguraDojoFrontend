/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';

const ModalComp_L1_Blog = ({ colors, content, mq }) => {
  const styleCompL1 = {
    '&.comp_l1': {
      width: '100%',
      position: 'absolute',

      '& .modal-col': {
        width: 'calc(100% - 51px)',

        [mq[2]]: {
          width: 'calc(100% - 39px)',
        },

        [mq[1]]: {
          width: 'calc(100% - 34px)',
        },

        [mq[0]]: {
          width: 'calc(100% - 29px)',
        },

        '& h1': {
          fontSize: '10vh',
          marginBottom: '1vh',
          color: colors.bgGrey,
          textShadow: `2px 0 0 ${colors.bgRed}, 0 2px 0 ${colors.bgRed}, -2px 0 0 ${colors.bgRed}, 0 -2px 0 ${colors.bgRed}`,
          position: 'relative',
          paddingTop: '2vh',
          paddingLeft: '2vh',

          [mq[0]]: {
            fontSize: '8vh',
          },
        },

        '& .modal-up': {
          height: '90vh',
          backgroundColor: 'white',
          borderRadius: '5px',
          //overflowY: 'scroll',

          '& .table': {
            marginTop: '1vh',
            height: '66vh',
            padding: '2vh',
            overflowY: 'auto',

            [mq[0]]: {
              height: '62vh',
            },
          },
        },

        '& .frameless': {
          marginTop: '-1vh',
          marginBottom: '-1vh',
        },
      },
    },
  };

  return (
    <div className="comp_l1" css={styleCompL1}>
      <div className="modal-col d-flex flex-column h-100">
        <div className="modal-up">
          <h1>{content.title}</h1>
          <BlogNav filterProps={content.filterProps} colors={colors} />
          <div className="table d-flex flex-row flex-wrap justify-content-around">
            <BlogEntry blog={content.blog} colors={colors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComp_L1_Blog;
