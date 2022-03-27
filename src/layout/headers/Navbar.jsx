import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { SearchBar } from './SearchBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//Importar Iconos
import iconFilter from '../../assets/icons/icon-filter.svg';


const Navbar = () => {

  //Tamaños ajustables de los componentes
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const findProps = {
    variant: matches ? "contained" : "outlined",
    borderBottomLeftRadius: matches ? "0px" : "19px",
    borderTopLeftRadius: matches ? "0px" : "19px",
    marginLeft: matches ? "0px" : "8px",
    color1: matches ? "whiteMain.main" : "violetMain.main",
    color2: matches ? "lightGreyLogin.characterLogin" : "whiteMain.main",
    
  };

  return (
    <>
      <AppBar position="static" color="violetMain" sx={{ width: "100%" }}>
        <Toolbar disableGutters="true">

          {/*Buscador del Producto*/}
          <Box sx={{ marginLeft: '80px' }} >
            <SearchBar />
          </Box>

          {/*Boton de Busqueda*/}
          <Button
            variant={findProps.variant}
            sx={{
              height: "36px",
              width: "139px",
              marginLeft: findProps.marginLeft,
              textTransform: 'none',
              backgroundColor: findProps.color1,
              borderBottomLeftRadius: findProps.borderBottomLeftRadius,
              borderTopLeftRadius: findProps.borderTopLeftRadius,
              borderBottomRightRadius: "19px",
              borderTopRightRadius: "19px",
              borderColor: "whiteMain.main",

              //Estilo de la fuente
              fontFamily: "PoppinsRegular",
              textAlign: "left",
              fontSize: "15px",
              color: findProps.color2,
              opacity: 1
            }}
          >
            Buscar
          </Button>

          {/*Boton de Filtros*/}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Button
              variant="outlined"
              //color del pasar el mouse encima o tema de fondo
              color="whiteMain"
              //icono del boton
              startIcon={<img src={iconFilter} alt={'Login'} />}

              sx={{
                height: "36px",
                width: "115px",
                marginLeft: "9px",
                textTransform: 'none',
                backgroundColor: "violetMain.main",
                borderRadius: "19px",
                borderColor: "whiteMain.main",

                //Estilo de la fuente
                fontFamily: "PoppinsRegular",
                textAlign: "left",
                fontSize: "15px",
                color: "whiteMain.main",
                opacity: 1
              }}
            >
              <span >Filtros</span>
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;


