import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import { SearchBar } from './SearchBar';

//Importar Iconos
import iconFilter from '../../assets/icons/icon-filter.svg';
//Importar Fuentes
import { Fonts } from '../../assets/fontsStyle';
//Importar paleta de Colores
import { Colors } from '../../assets/colorsStyle';



const Navbar = () => {

  return (

    //Consumir los Estilos 
    <ThemeProvider theme={Fonts}>
      <CssBaseline />

      <AppBar position="static" sx={{ width: "100%", backgroundColor: Colors.violeta }}>

        <Toolbar>

          <Grid container justifyContent="flex-start">

            {/*Boton de Promociones*/}
            <SearchBar />

            {/*Boton de Promociones*/}
            <Button
              variant="outlined"

              sx={{
                height: "36px",
                width: "232px",
                textTransform: 'none',
                backgroundColor: Colors.violeta,
                borderColor: Colors.white,

                //Estilo de la fuente
                fontFamily: "PoppinsRegular",
                textAlign: "left",
                fontSize: "15px",
                color: Colors.white,
                opacity: 1
              }}
            >
              Buscar
            </Button>

            {/*Boton de Promociones*/}
            <Grid item>
              <Button
                variant="outlined"

                sx={{
                  height: "36px",
                  width: "232px",
                  textTransform: 'none',
                  backgroundColor: Colors.violeta,
                  borderColor: Colors.white,

                  //Estilo de la fuente
                  fontFamily: "PoppinsRegular",
                  textAlign: "left",
                  fontSize: "15px",
                  color: Colors.white,
                  opacity: 1
                }}
              >
                Filtros
                <Box sx={{ ml: 2 }}>
                  <img src={iconFilter} alt={'Login'} />
                </Box>
              </Button>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>

    </ThemeProvider>
  );
}

export default Navbar;


