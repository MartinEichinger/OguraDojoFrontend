/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import Button from '@material-ui/core/Button';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';

import { useSelector } from 'react-redux';
import { selectFilter } from '../../store/filter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(121, 0, 0, 1)',
  },
}));

const BlogEntry = ({ blog, colors }) => {
  const filterState = useSelector(selectFilter);
  const classes = useStyles();

  return blog.map((item, i) => {
    return filterState === 'Alle' || item.cat === filterState ? (
      <div className="blog-card d-flex flex-column" key={i}>
        <h5 className="text-center font-weight-bold">
          {item.date} +++ {item.cat} +++ {item.tags}
        </h5>
        <div className="body d-flex flex-row">
          <div
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundPosition: item.imgPos,
            }}
            className="image"
          ></div>
          <div className="text d-flex flex-column justify-content-center">
            <h4 className="text-center green">{item.cat}</h4>
            <p className="linie text-center"></p>
            <h2 className="text-center">{item.header}</h2>
            <p className="linie text-center"></p>
            <p className="text-center">{item.detail}</p>
          </div>
        </div>
        <a href={item.link} target="_blank" rel="noreferrer" className="button">
          <Button className={classes.root} variant="contained" startIcon={<SubjectOutlinedIcon />}>
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
