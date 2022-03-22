import * as React from 'react';
import { Link, NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

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

        <ThemeProvider theme={Fonts}>
            <CssBaseline />

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: Colors.white, boxShadow: 1 }}>
                    <Toolbar>

                        <Link to="/">
                            <IconButton
                                //Medidas oficiales 163 ancho y 40 de largo
                                sx={{ mt: "11px", ml: "72px", width: 163, height: 40 }}
                            >
                                <img src={logo} alt={'Logo Principal'} className={''} />
                            </IconButton>
                        </Link>

                        {/*textTransform: Convertir el texto en minuscula o en mayuscula*/}
                        <Button sx={{
                            //Estilo del boton
                            textTransform: 'none',
                            backgroundColor: Colors.lightGreyLogin,
                            mt: "14px",
                            ml: "963px",
                            width: "237px",
                            height: "37px",
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
                            sx={{ mt: "18px", ml: "40px", width: 29, height: 29 }}
                        >
                            <img src={loginIcon} alt={'Logo Principal'} />
                        </IconButton>


                        <NavLink
                            to="/shopping-cart"
                        >
                            <IconButton
                                //Medidas oficiales 29 ancho y 36 de largo
                                sx={{ mt: "11px", ml: "30px", width: 29, height: 36 }}
                            >
                                <img src={carritoIcon} alt={'Logo Principal'} className={''} />
                            </IconButton>
                        </NavLink>



                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}

export default Header;
