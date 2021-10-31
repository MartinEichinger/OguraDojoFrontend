/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { Button, TextField } from '@mui/material';
//import Button from '@material-ui/core/Button';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UploadFileIcon from '@mui/icons-material/UploadFile';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import { useSelector } from 'react-redux';
import { selectFilter } from '../../store/filter';
//import { makeStyles } from '@mui/styles';
import { useFormControls } from './BlogEntry.controls';

/* const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(121, 0, 0, 1)',
  },
  root2: {
    '& .MuiFormHelperText-root': {
      fontSize: '0.75rem !important',
    },
  },
})); */

const BlogEntry = ({ blogs, colors, isAuthenticated }) => {
  const filterState = useSelector(selectFilter);
  //const classes = useStyles();

  const entries = [
    // part I
    { name: 'date', id: '#date' },
    { name: 'smallHeading', id: '#smallHeading', val_length: 64 },
    { name: 'category', id: '#category', val_length: 32 },
    { name: 'title', id: '#title', val_length: 64 },
    { name: 'detail', id: '#detail', val_length: 256 },
    { name: 'picture', id: '#picture', val_length: 32 },
    { name: 'document', id: '#document', val_length: 32 },
  ];

  const { onChangeBlog, formIsValid, clickSaveButton, changedData, errors } = useFormControls({
    blogs,
    entries,
  });

  return (
    <React.Fragment>
      {isAuthenticated && (
        <div className="blog-card">
          <Box
            className="d-flex flex-column"
            component="form"
            autocomplete="off"
            sx={{
              '& .MuiFormHelperText-root': {
                fontSize: '0.75rem !important',
              },
            }}
          >
            <h5 className="text-center font-weight-bold">+++ Neuer Eintrag +++</h5>
            <div className={`body new-entry`}>
              <p className="col_1 row_1 green">Datum: </p>
              {changedData && 'picture' in changedData && changedData['picture'] !== '' && (
                <div
                  className="pict-frame"
                  style={{
                    backgroundImage: `url(${URL.createObjectURL(changedData['picture'])})`,
                    backgroundPosition: `${
                      'pictPos' in changedData ? changedData['pictPos'] : '50% 50%'
                    }`,
                  }}
                ></div>
              )}
              <TextField
                variant="standard"
                className="col_2 row_1"
                name="date"
                id="date"
                type="date"
                value={changedData['date']}
                {...(errors['date'] && {
                  error: true,
                  helperText: errors['date'],
                })}
                onChange={(event) => onChangeBlog('date', event.target.value)}
                onBlur={(event) => onChangeBlog('date', event.target.value)}
              />
              <p className="col_3 row_1 green">Tags: </p>
              <TextField
                variant="standard"
                className="col_4 row_1"
                name="smallHeading"
                id="smallHeading"
                value={changedData['smallHeading']}
                {...(errors['smallHeading'] && {
                  error: true,
                  helperText: errors['smallHeading'],
                })}
                onChange={(event) => onChangeBlog('smallHeading', event.target.value)}
                onBlur={(event) => onChangeBlog('smallHeading', event.target.value)}
              />
              <p className="col_1 row_2 green">Kategorie: </p>
              <TextField
                variant="standard"
                className="col_2 row_2"
                name="category"
                id="category"
                value={changedData['category']}
                {...(errors['category'] && {
                  error: true,
                  helperText: errors['category'],
                })}
                onChange={(event) => onChangeBlog('category', event.target.value)}
                onBlur={(event) => onChangeBlog('category', event.target.value)}
              />

              <p className="col_3 row_2 green">Titel: </p>
              <TextField
                variant="standard"
                className="col_4 row_2"
                name="title"
                id="title"
                value={changedData['title']}
                {...(errors['title'] && {
                  error: true,
                  helperText: errors['title'],
                })}
                onChange={(event) => onChangeBlog('title', event.target.value)}
                onBlur={(event) => onChangeBlog('title', event.target.value)}
              />
              <p className="col_1 row_3 green">Detail: </p>
              <TextField
                variant="standard"
                className="col_2 row_3"
                name="detail"
                id="detail"
                value={changedData['detail']}
                {...(errors['detail'] && {
                  error: true,
                  helperText: errors['detail'],
                })}
                onChange={(event) => onChangeBlog('detail', event.target.value)}
                onBlur={(event) => onChangeBlog('detail', event.target.value)}
              />
              <p className="col_3 row_3 green">Position: </p>
              <div className="col_4 row_3 d-flex flex-row no-wrap">
                <TextField
                  variant="standard"
                  className="pe-2"
                  name="pictPos_1"
                  id="pictPos_1"
                  type="number"
                  InputProps={{ inputProps: { min: '0', max: '100', step: '5' } }}
                  defaultValue="50"
                  onChange={(event) => onChangeBlog('pictPos_1', event.target.value)}
                />
                <TextField
                  variant="standard"
                  className="ps-2"
                  name="pictPos_2"
                  id="pictPos_2"
                  type="number"
                  InputProps={{ inputProps: { min: '0', max: '100', step: '5' } }}
                  defaultValue="50"
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
                sx={{ backgroundColor: 'rgba(121, 0, 0, 1)' }}
                variant="contained"
                startIcon={<SubjectOutlinedIcon />}
                onClick={() => clickSaveButton()}
                disabled={!formIsValid()}
              >
                Speichern
              </Button>
            </div>
          </Box>
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
              <Button
                sx={{ backgroundColor: 'rgba(121, 0, 0, 1)' }}
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
      })}
    </React.Fragment>
  );
};

export default BlogEntry;

/* <Select
  variant="standard"
  className={`col_2 row_2`}
  name="category"
  id="category"
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
</Select>;
 */
