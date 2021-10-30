/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { Button, TextField } from '@material-ui/core';
//import Button from '@material-ui/core/Button';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useSelector } from 'react-redux';
import { selectFilter } from '../../store/filter';
import { makeStyles } from '@material-ui/core/styles';
import { useFormControls } from './BlogEntry.controls';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(121, 0, 0, 1)',
  },
  root2: {
    '& .MuiFormHelperText-root': {
      fontSize: '0.75rem !important',
    },
  },
}));

const BlogEntry = ({ blogs, colors, isAuthenticated }) => {
  const filterState = useSelector(selectFilter);
  const classes = useStyles();
  let blah = {};

  const entries = [
    // part I
    { name: 'date', id: '#date' },
    { name: 'smallHeading', id: '#smallHeading', val_length: 64 },
    { name: 'category', id: '#category', val_length: 32 },
    { name: 'title', id: '#title', val_length: 64 },
    { name: 'detail', id: '#detail', val_length: 256 },
    { name: 'picture', id: '#picture' },
    { name: 'document', id: '#document' },
  ];

  const { onChangeBlog, formIsValid, saveFormData, editData, entryData, changedData, errors } =
    useFormControls({
      blogs,
      entries,
    });

  return (
    <React.Fragment>
      {isAuthenticated && (
        <div className="blog-card d-flex flex-column">
          <h5 className="text-center font-weight-bold">+++ Neuer Eintrag +++</h5>
          <div className={`${classes.root2} body new-entry`}>
            <p className="col_1 row_1 green">Datum: </p>
            {changedData && 'picture' in changedData && (
              <div
                className="pict-frame"
                style={{
                  backgroundImage: `url(${URL.createObjectURL(changedData['picture'])})`,
                  backgroundPosition: `${'pictPos' in changedData ? changedData['pictPos'] : '50% 50%'}`,
                }}
              ></div>
            )}
            <TextField
              className="col_2 row_1"
              name="date"
              id="date"
              type="date"
              error={errors['date']}
              onChange={(event) => onChangeBlog('date', event.target.value)}
            />
            <p className="col_3 row_1 green">Tags: </p>
            <TextField
              className="col_4 row_1"
              name="smallHeading"
              id="smallHeading"
              error={errors['smallHeading']}
              {...(errors['smallHeading'] && {
                error: true,
                helperText: errors['smallHeading'],
              })}
              onChange={(event) => onChangeBlog('smallHeading', event.target.value)}
            />
            <p className="col_1 row_2 green">Kategorie: </p>
            <Select
              className={`col_2 row_2`}
              name="category"
              id="category"
              variant="standard"
              sx={{
                margin: '0.5rem',
                padding: '0px !important',
                '& .MuiSelect-select': {
                  padding: '0px',
                },
              }}
              value={changedData && 'category' in changedData ? changedData['category'] : 'Tengu'}
              onChange={(event) => onChangeBlog('category', event.target.value)}
            >
              <MenuItem style={{ display: 'block' }} value={'Tengu'}>
                Tengu
              </MenuItem>
              <MenuItem style={{ display: 'block' }} value={'Taiji/Qigong'}>
                Taiji/Qigong
              </MenuItem>
              <MenuItem style={{ display: 'block' }} value={'Bücher'}>
                Bücher
              </MenuItem>
            </Select>
            <p className="col_3 row_2 green">Titel: </p>
            <TextField
              className="col_4 row_2"
              name="title"
              id="title"
              error={errors['title']}
              onChange={(event) => onChangeBlog('title', event.target.value)}
            />
            <p className="col_1 row_3 green">Detail: </p>
            <TextField
              className="col_2 row_3"
              name="detail"
              id="detail"
              error={errors['detail']}
              onChange={(event) => onChangeBlog('detail', event.target.value)}
            />
            <p className="col_3 row_3 green">Position: </p>
            <div className="col_4 row_3 d-flex flex-row no-wrap">
              <TextField
                className="pe-2"
                name="pictPos_1"
                id="pictPos_1"
                type="number"
                InputProps={{ inputProps: { min: '0', max: '100', step: '5' } }}
                defaultValue="50"
                error={errors['pictPos']}
                onChange={(event) => onChangeBlog('pictPos_1', event.target.value)}
              />
              <TextField
                className="ps-2"
                name="pictPos_2"
                id="pictPos_2"
                type="number"
                InputProps={{ inputProps: { min: '0', max: '100', step: '5' } }}
                defaultValue="50"
                error={errors['pictPos']}
                onChange={(event) => onChangeBlog('pictPos_2', event.target.value)}
              />
            </div>
            <div className="col_1 row_4">
              <input
                hidden
                type="file"
                accept="image/*"
                id="picture"
                onChange={(event) => {
                  onChangeBlog('picture', event.target.files[0]);
                }}
                required
              />
              <label htmlFor="picture">
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
            <p className="col_2 row_4">
              {changedData && 'picture' in changedData ? changedData['picture'].name : '...'}
            </p>
            <div className="col_3 row_4">
              <input
                hidden
                type="file"
                accept=".pdf"
                id="document"
                onChange={(event) => onChangeBlog('document', event.target.files[0])}
                required
              />
              <label htmlFor="document">
                <IconButton color="primary" component="span">
                  <UploadFileIcon />
                </IconButton>
              </label>
            </div>
            <p className="col_4 row_4 overflow">
              {changedData && 'document' in changedData ? changedData['document'].name : '...'}
            </p>
          </div>

          <div className="button">
            <Button
              className={classes.root}
              variant="contained"
              startIcon={<SubjectOutlinedIcon />}
              onClick={() => saveFormData(true)}
              disabled={!formIsValid()}
            >
              Speichern
            </Button>
          </div>
        </div>
      )}
      {blogs.map((item, i) => {
        return filterState === 'Alle' || item.category === filterState ? (
          <div className="blog-card d-flex flex-column" key={i}>
            <h5 className="text-center font-weight-bold">
              {item.date} +++ {item.smallHeading}
            </h5>
            <div className="body d-flex flex-row">
              <div
                style={{
                  backgroundImage: `url(${item.picture})`,
                  backgroundPosition: item.pictPos,
                }}
                className="image"
              ></div>
              <div className="text d-flex flex-column justify-content-center">
                <h4 className="text-center green">{item.category}</h4>
                <p className="linie text-center"></p>
                <h2 className="text-center">{item.title}</h2>
                <p className="linie text-center"></p>
                <p className="text-center">{item.detail}</p>
              </div>
            </div>
            <a href={item.file} target="_blank" rel="noreferrer" className="button">
              <Button className={classes.root} variant="contained" startIcon={<SubjectOutlinedIcon />}>
                Artikel lesen
              </Button>
            </a>
          </div>
        ) : (
          ''
        );
      })}
    </React.Fragment>
  );
};

export default BlogEntry;
