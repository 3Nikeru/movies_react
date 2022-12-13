import {createTheme} from "@mui/material";

export const theme = createTheme({
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
        dark: '#000000',
        light: '#b3db8f',
      },
      secondary:{
        main: '#81d0f6',
        dark: '#000000',
        light: '#75c8f0',
      },
      detail:{
        main: '#dabde8',
        dark: '#000000',
        light: '#d5b4e4',
      }
    }
  });

  export default theme;

