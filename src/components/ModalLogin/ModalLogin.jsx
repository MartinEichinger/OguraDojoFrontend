/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/auth';

import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';

const ModalLogin = () => {
  const dispatch = useDispatch();
  const [pwd, setPwd] = useState({ password: '' });
  const [user, setUser] = useState({ username: '' });

  const innerRef = useRef(null);

  // Debugging
  const debug = false;

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

  // Methods
  const onlogin = (username, password) => {
    dispatch(logIn(username, password));
    setUser({ username: '' });
    setPwd({ password: '' });
  };

  useEffect(() => {
    const div = innerRef.current;
    // subscribe event
    div.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 13) document.getElementById('login-button').click();
    });
    // unsubscribe event
    return function cleanup() {
      div.removeEventListener('keyup', function (ev) {
        if (ev.keyCode === 13) document.getElementById('login-button').click();
      });
    };
  }, []);

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
                <Box
                  component="form"
                  autoComplete="off"
                  sx={{
                    padding: '4vh',

                    '& .MuiTextField-root': {
                      marginBottom: 3,
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  }}
                  ref={innerRef}
                >
                  <TextField
                    required
                    variant="standard"
                    id="id_login"
                    label="Login"
                    value={user.username}
                    onChange={(e) => setUser({ username: e.target.value })}
                  />
                  <TextField
                    required
                    variant="standard"
                    id="id_pwd"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={pwd.password}
                    onChange={(e) => setPwd({ password: e.target.value })}
                  />

                  <Button
                    type="button"
                    color="primary"
                    className="form__custom-button"
                    id="login-button"
                    variant="contained"
                    onClick={() => onlogin(user.username, pwd.password)}
                    data-bs-dismiss="modal"
                  >
                    Log in
                  </Button>
                  <Button
                    sx={{
                      marginLeft: 1,
                    }}
                    type="button"
                    color="secondary"
                    className="form__custom-button"
                    id="break-button"
                    variant="contained"
                    data-bs-dismiss="modal"
                  >
                    Abbruch
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalLogin;
