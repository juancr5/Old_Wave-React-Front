import * as React from 'react';
import { Link, NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';

//Importar Iconos
import logo from '../../assets/icons/logo-oldwave-header.svg';
import loginIcon from '../../assets/icons/login-icon.svg';
import carritoIcon from '../../assets/icons/carrito-icon.svg';
//Importar Fuentes
import { Fonts } from '../../assets/fontsStyle';
//Importar paleta de Colores
import { Colors } from '../../assets/colorsStyle';


const Header = () => {

    return (

        //Consumir los Estilos 
        <ThemeProvider theme={Fonts}>
            <CssBaseline />

            <AppBar position="static" sx={{ width: "100%", height: "70px", backgroundColor: Colors.white, boxShadow: 0 }}>
                <Toolbar>

                    <Link to="/">
                        <IconButton
                            //Medidas oficiales 163 ancho y 40 de largo
                            sx={{ mt: "10px", mb: "15px", ml: "72px", width: "163px", height: "40px" }}
                        >
                            <img src={logo} alt={'Logo Principal'} />
                        </IconButton>
                    </Link>

                    {/*Alinear a todo a la izquierda*/}
                    <Grid container justifyContent="flex-end">

                        <Button sx={{
                            //textTransform: Convertir el texto en minuscula o en mayuscula
                            //Estilo del boton
                            width: "237px",
                            height: "37px",
                            textTransform: 'none',
                            backgroundColor: Colors.lightGreyLogin,
                            mt: "14px",
                            mb: "15px",
                            mr: "11px",
                        
                            borderRadius: "19px",

                            //Estilo de la fuente
                            fontFamily: "PoppinsRegular",
                            textAlign: "left",
                            fontSize: "15px",
                            color: Colors.characterLogin,
                            opacity: 1
                        }}>
                            Regístrate o inicia sesion
                        </Button>


                        <IconButton
                            //Medidas oficiales 29 ancho y 29 de largo
                            sx={{ mt: "17px", mb: "19px", mr: "21px", width: 29, height: 29, }}
                        >
                            <img src={loginIcon} alt={'Login'} />
                        </IconButton>

                        <NavLink
                            to="/shopping-cart"
                        >
                            <IconButton
                                //Medidas oficiales 29 ancho y 36 de largo
                                sx={{ mt: "11px", mr: "71px", width: 29, height: 36, }}
                            >
                                <img src={carritoIcon} alt={'Shopping Cart'} />
                            </IconButton>
                        </NavLink>

                    </Grid>

                </Toolbar>
            </AppBar>

        </ThemeProvider>
    )
}

export default Header;

