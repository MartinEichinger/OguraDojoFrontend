import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      // green
      main: '#0A7900',
    },
    secondary: {
      // red
      main: '#790000',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
