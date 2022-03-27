import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box, Grid, Typography } from '@mui/material';

//Importar Iconos
import logo from '../../assets/icons/logo-oldwave-header.svg';
import loginIcon from '../../assets/icons/login-icon.svg';
import carritoIcon from '../../assets/icons/carrito-icon.svg';


const Header = () => {

    return (
        <>
            <AppBar position="static" color="whiteMain" sx={{ width: "100%", height: "70px", boxShadow: 0 }}>
                {/*Desactica el padding que trae por defecto el Toolbar*/}
                <Toolbar disableGutters="true">

                    {/*Icono principal de la aplicacion*/}
                    <Typography>
                        <Link to="/">
                            <IconButton
                                //Medidas oficiales 163 ancho y 40 de largo
                                sx={{ mt: "10px", mb: "15px", ml: "72px", width: "163px", height: "40px" }}
                            >
                                <img src={logo} alt={'Logo Principal'} />
                            </IconButton>
                        </Link>
                    </Typography>

                    {/*Botones de la parte de Izquierda */}
                    <Grid container direction="row" justifyContent="end" >

                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <Button
                                color="lightGreyLogin"
                                variant="contained"
                                sx={{
                                    //textTransform: Convertir el texto en minuscula o en mayuscula
                                    //Estilo del boton
                                    textTransform: "none",
                                    width: "237px",
                                    height: "37px",
                                    mt: "14px",
                                    mb: "15px",
                                    mr: "14px",
                                    borderRadius: "19px",
                                    boxShadow: "0",

                                    //Estilo de la fuente
                                    fontFamily: "PoppinsRegular",
                                    textAlign: "left",
                                    fontSize: "16px",
                                }}>
                                Regístrate o inicia sesión
                            </Button>
                        </Box >

                        <Box sx={{ display: 'flex' }}>
                            <IconButton sx={{ mt: "17px", mb: "19px", mr: "21px", width: 29, height: 29, }}>
                                <img src={loginIcon} alt={'Login'} />
                            </IconButton>

                            <NavLink to="/shopping-cart">
                                <IconButton sx={{ mt: "11px", mb: "19px", mr: '71px', width: 29, height: 36, }}>
                                    <img src={carritoIcon} alt={'Shopping Cart'} />
                                </IconButton>
                            </NavLink>
                        </Box>

                    </Grid>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Header;

