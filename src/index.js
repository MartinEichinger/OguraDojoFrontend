import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line
import bootstrap from 'bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import blue from '@material-ui/core/colors/blue';
import App from './App';
//import { store } from './store/configureStore';
//import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
//import { configureStore } from '@reduxjs/toolkit';

const od_theme = createTheme({
  palette: {
    primary: {
      // green
      main: '#0A7900',
    },
    secondary: {
      // red
      main: '#790000',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={od_theme}>
      <App />
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
