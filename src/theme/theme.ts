import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: 16,
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fff',
          color: '#101828',
          lineHeight: '1.25',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up('mobile')]: {
              maxWidth: '320px',
              paddingRight: '20px',
              paddingLeft: '20px',
            },
            [theme.breakpoints.up('desktop')]: {
              maxWidth: '1440px',
              paddingRight: '120px',
              paddingLeft: '120px',
            },
          }),
      },
    },
  },
});

export default theme;
