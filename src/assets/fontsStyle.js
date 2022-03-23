import {createTheme} from '@mui/material/styles';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';

//Tipogarfias
export const Fonts = createTheme({

    typography: {
      fontFamily: 'Poppins',
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'PoppinsRegular';
            src: local('PoppinsRegular'), local('Poppins-Regular'), url(${PoppinsRegular}) format('truetype');
          }
        `,
      },
    },

  });