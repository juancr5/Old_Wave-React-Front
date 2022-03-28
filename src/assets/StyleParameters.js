import {createTheme} from '@mui/material/styles';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsBlack from './fonts/Poppins-Black.ttf';

//Tipogarfias
export const StyleParameters = createTheme({

    typography: {
      fontFamily: 'Poppins',
    },

    components: {
      //Importar Fuentes Propias
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'PoppinsRegular';
            src: local('PoppinsRegular'), local('Poppins-Regular'), url(${PoppinsRegular}) format('truetype');
          }

          @font-face {
            font-family: 'PoppinsBlack';
            src: local('PoppinsBlack'), local('Poppins-Black'), url(${PoppinsBlack}) format('truetype');
          }
        `,
      },
    },

    //Paleta de Colores
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      violetMain: {
        main: '#772CE8',
      },
      whiteMain: {
        main: '#FFFFFF',
      },
      lightGreyLogin: {
        main: '#F4F6FA',
        characterLogin: '#3B3B3B',
      },
      characterLogin: {
        main: '#3B3B3B',
      },
      lightBlueSeparator: {
        main: '#C5D3DD',
        footer: '#32D1F7',
      },
      lightGreySearch: {
        main: '#5C5E64',
      },
    },

    //Tamaños de la pantalla
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 900,
      },
    },
  });