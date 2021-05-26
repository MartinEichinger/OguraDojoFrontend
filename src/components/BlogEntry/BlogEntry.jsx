/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import Button from '@material-ui/core/Button';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';

import { useSelector } from 'react-redux';
import { selectFilter } from '../../features/filter/filterSlice';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(121, 0, 0, 1)',
  },
}));

const BlogEntry = ({ blog, colors }) => {
  const filterState = useSelector(selectFilter);
  const classes = useStyles();

  const style = {
    width: '550px',
    fontFamily: 'Lato, sans-serif',
    padding: '1vh',

    '& h2': {
      fontSize: '1.75vh',
    },

    '& h4': {
      fontSize: '1.2vh',
    },

    '& h5': {
      fontSize: '1.2vh',
    },

    '& p': {
      fontSize: '1.3vh',
    },

    '& .body': {
      backgroundColor: colors.bgGrey,
      borderRadius: '5px',
      height: '25vh',
      maxHeight: '250px',
    },

    '& .text': {
      margin: '15px',
    },

    '& .green': {
      color: colors.typoGreen,
    },

    '& img': {
      borderRadius: '5px 0 0 5px',
    },

    '& .w-40': {
      width: '40%',
    },

    '& .button': {
      margin: '-16px auto 0',
      '& Button': {
        width: '150px',
        fontSize: '12px',
        borderRadius: '25px',
        backgroundColor: colors.bgRed,
        color: colors.bgWhite,

        '&:hover': {
          backgroundColor: colors.bgRed,
          color: colors.bgWhite,
          boxShadow: `10px 10px 25px 0px ${colors.shadowGrey}`,
        },

        '&:active': {
          transform: 'scale(0.98)',
          boxShadow: `0px 0px 5px 0px ${colors.shadowGrey}`,
        },
      },
    },

    '& .mt_16': {
      marginTop: '-16px',
    },

    '.image': {
      backgroundRepeat: 'no-repeat',

      backgroundSize: 'cover',
      borderRadius: '5px 0 0px 5px',
    },

    '.linie': {
      borderTop: '1px solid black',
      width: '30px',
      margin: '5px auto',
    },
  };

  return blog.map((item, i) => {
    return filterState === 'Alle' || item.cat === filterState ? (
      <div className="d-flex flex-column" css={style} key={i}>
        <h5 className="text-center font-weight-bold">
          {item.date} +++ {item.cat} +++ {item.tags}
        </h5>
        <div className="body d-flex flex-row">
          <div
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundPosition: item.imgPos,
            }}
            className="image w-50"
          ></div>
          <div className="text d-flex flex-column w-50 justify-content-center">
            <h4 className="text-center green">{item.cat}</h4>
            <p className="linie text-center"></p>
            <h2 className="text-center">{item.header}</h2>
            <p className="linie text-center"></p>
            <p className="text-center">{item.detail}</p>
          </div>
        </div>
        <a href={item.link} target="_blank" rel="noreferrer" className="button">
          <Button
            className={classes.root}
            variant="contained"
            startIcon={<SubjectOutlinedIcon />}
          >
            Artikel lesen
          </Button>
        </a>
      </div>
    ) : (
      ''
    );
  });
};

export default BlogEntry;
