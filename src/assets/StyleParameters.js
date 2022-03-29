import {createTheme} from '@mui/material/styles';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsBlack from './fonts/Poppins-Black.ttf';
import PoppinsMedium from './fonts/Poppins-Medium.ttf';
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf';
import PoppinsBold from './fonts/Poppins-Bold.ttf';


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

          @font-face {
            font-family: 'PoppinsMedium';
            src: local('PoppinsMedium'), local('Poppins-Medium'), url(${PoppinsMedium}) format('truetype');
          }

          @font-face {
            font-family: 'PoppinsSemiBold';
            src: local('PoppinsSemiBold'), local('Poppins-SemiBold'), url(${PoppinsSemiBold}) format('truetype');
          }

          @font-face {
            font-family: 'PoppinsBold';
            src: local('PoppinsBold'), local('Poppins-Bold'), url(${PoppinsBold}) format('truetype');
          }
        `,
      },
    },

    //Paleta de Colores
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053E85',
      },
      violetMain: {
        main: '#772CE8',
        secondary:'#9f69f0',
      },
      whiteMain: {
        main: '#FFFFFF',
        violetMain: '#772CE8',
      },
      lightGreyLogin: {
        main: '#F4F6FA',
        characterLogin: '#3B3B3B',
        input: '#676166',
      },
      darkGrey: {
        main: '#3A3A3A',
      },
      characterLogin: {
        main: '#3B3B3B',
      },
      lightBlueSeparator: {
        main: '#C5D3DD',
        footer: '#32D1F7',
        opacity: '#D0F4FC',
      },
      lightGreySearch: {
        main: '#5C5E64',
      },
    },

    //Tamaños de la pantalla
    breakpoints: {
      values: {
        xs: 0,
        sm: 550,
        md: 900,
        lg: 1366,
        xl: 1400,
      },
    },
  });