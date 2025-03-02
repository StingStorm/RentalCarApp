import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: '60px',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#fff',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.33,
      color: '#fff',
    },
    navLink: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.25,
    },
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
        html: {
          height: '100%',
        },
        body: {
          backgroundColor: '#fff',
          color: '#101828',
          lineHeight: '1.25',
          minHeight: '100%',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'navLink' },
          style: {
            '&:hover': {
              color: '#0b44cd',
            },
            '&.active': {
              color: '#0b44cd',
            },
          },
        },
      ],
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
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'appButton' },
              style: {
                border: 'none',
                borderRadius: 12,
                fontWeight: 600,
                lineHeight: 1.25,
                width: '276px',
                height: '44px',
                color: '#fff',
                backgroundColor: '#3470ff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#0b44cd',
                },
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
