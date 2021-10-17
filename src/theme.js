import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#973F32',
    },
    secondary: {
      main: '#403020',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
