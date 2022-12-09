import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Comfortaa-Medium',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Comfortaa-Medium';
              src: url('../../assets/fonts/Comfortaa-Medium.ttf');
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
    }
  });

  export default theme;


