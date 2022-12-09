import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Comfortaa',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Comfortaa-Medium';
              src: url('../../assets/fonts/Comfortaa-Medium.ttf');
            }
            @font-face {
              font-family: 'Comfortaa-Bold';
              src: url('../../assets/fonts/Comfortaa-Bold.ttf');
            }
          `,
        },
      },
    palette: {
      primary: {
        main: '#99c679',
        dark: '#272727',
        light: '#b3db8f',
      },
      secondary:{
        main: '#81d0f6',
        dark: '#272727',
        light: '#75c8f0',
      }
    }
  });

  export default theme;


