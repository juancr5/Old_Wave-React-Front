import * as React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { InitialContext } from '../../context/InitialContext';
import { getProductsByName } from '../../services/ProductServices';


//Importar Iconos
import iconFilter from '../../assets/icons/icon-filter.svg';


const Navbar = () => {

  // Se importa el useState desde el useContext de Categories
  const { input, setInput } = React.useContext(InitialContext)

  //Tamaños ajustables de los componentes
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const findProps = {
    marginLeft: matches ? "40px" : "80px"
  };

  const findButtonProps = {
    variant: matches ? "contained" : "outlined",
    borderBottomLeftRadius: matches ? "0px" : "19px",
    borderTopLeftRadius: matches ? "0px" : "19px",
    marginLeft: matches ? "0px" : "8px",
    color1: matches ? "whiteMain.main" : "violetMain.main",
    color2: matches ? "lightGreyLogin.characterLogin" : "whiteMain.main",
  };

  const resizeProps = {
    width: matches ? "default" : "1366px",
    justifyContent: matches ? "default" : "center",
    display: matches ? "default" : "flex"

  };

   //
   const handleClick = (e) => {
    getProductsByName(input.textInput, 1).then((products) => {
      setInput({
        ...input,
        AllProducts: products.data.items
      });
    });
  };

  return (
    <>
      <AppBar position="static" color="violetMain" sx={{ width: "100%", height: "66px" }}>

        <Box sx={{ display: resizeProps.display, justifyContent: resizeProps.justifyContent }}>

          {/*01 Div Izquierda*/}
          <Box />

          {/*02 Contenido Principal*/}
          <Box sx={{ width: resizeProps.width }}>

            <Toolbar disableGutters="true" sx={{ width: '100%' }}>

              {/*Buscador del Producto*/}
              <Box sx={{ marginLeft: findProps.marginLeft }} >
                <SearchBar />
              </Box>

              {/*Boton de Busqueda*/}
              {/*Quitar linea bajo la palabra: style={{ textDecoration: 'none' }} */}
              <NavLink to={"/products"} style={{ textDecoration: 'inherit' }}>
                <Button
                  onClick={() => handleClick()}
                  variant={findButtonProps.variant}
                  sx={{
                    height: "36px",
                    width: "139px",
                    marginLeft: findButtonProps.marginLeft,
                    textTransform: 'none',
                    backgroundColor: findButtonProps.color1,
                    borderBottomLeftRadius: findButtonProps.borderBottomLeftRadius,
                    borderTopLeftRadius: findButtonProps.borderTopLeftRadius,
                    borderBottomRightRadius: "19px",
                    borderTopRightRadius: "19px",
                    borderColor: "whiteMain.main",
                    "&:hover": {
                      backgroundColor: "violetMain.secondary",
                    },
                    //Estilo de la fuente
                    fontFamily: "PoppinsRegular",
                    textAlign: "left",
                    fontSize: "15px",
                    color: findButtonProps.color2,
                    opacity: 1
                  }}
                >
                  Buscar
                </Button>
              </NavLink>

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
                    "&:hover": {
                      backgroundColor: "violetMain.secondary",
                    },

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
          </Box>

          {/*03 Div Derecha*/}
          <Box />

        </Box>

      </AppBar>
    </>
  );
}

export default Navbar;