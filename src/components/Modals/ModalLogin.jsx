/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLoginAsync } from '../../features/auth/authSlice';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4vh',

    '& .MuiTextField-root': {
      marginBottom: theme.spacing(4),
      //padding: '1vh',
      //width: '50ch',
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

const ModalLogin = () => {
  const dispatch = useDispatch();
  const [pwd, setPwd] = useState(0);
  const [user, setUser] = useState(0);

  // Debugging
  const debug = true;

  // Style
  const styleModalDialog = {
    width: '100vw',
    maxWidth: '1440px',
    height: 'calc(100vh - 3.5vh)', // 2rem
    zIndex: '1051',
    position: 'relative',
    overflow: 'hidden',
    margin: '1.75vh auto',

    '& .modal-content': {
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',

      '& .modal-row': {
        width: '100%',

        '& .modal-up': {
          //height: '50vh',
          margin: '0 auto',
          backgroundColor: 'white',
          borderRadius: '5px',
        },
      },
    },
  };

  const classes = useStyles();

  // Methods
  const onlogin = (username, password) => {
    console.log('try login: ', username, password);
    dispatch(authLoginAsync(username, password));
  };

  if (debug) console.log('ModalLogin/render');

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="idModalLogin"
        tabIndex="-1"
        aria-labelledby="ModalLoginLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
          css={styleModalDialog}
        >
          <div className="modal-content">
            <div className="modal-row d-flex flex-row h-100 align-items-center">
              <div className="modal-up">
                <form className={classes.root}>
                  <TextField
                    required
                    id="id_login"
                    label="Login"
                    onChange={(e) => setUser({ username: e.target.value })}
                  />
                  <TextField
                    required
                    id="id_pwd"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPwd({ password: e.target.value })}
                  />

                  <Button
                    type="button"
                    color="primary"
                    className="form__custom-button"
                    variant="contained"
                    onClick={() => onlogin(user.username, pwd.password)}
                    data-bs-dismiss="modal"
                  >
                    Log in
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalLogin;
