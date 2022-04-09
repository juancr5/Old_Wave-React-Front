import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//Importar Iconos
import logo from "../../assets/icons/logo-oldwave-header.svg";
import loginIcon from "../../assets/icons/login-icon.svg";
import carritoIcon from "../../assets/icons/carrito-icon.svg";

const Header = () => {
  //Tamaños ajustables de los componentes
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const resizeProps = {
    width: matches ? "default" : "1366px",
    justifyContent: matches ? "default" : "center",
    display: matches ? "default" : "flex",
  };

  return (
    <>
      <AppBar
        position="static"
        color="whiteMain"
        sx={{ width: "100%", height: "66px", boxShadow: 0 }}
      >
        <Box
          sx={{
            display: resizeProps.display,
            justifyContent: resizeProps.justifyContent,
          }}
        >
          {/*01 Div Izquierda*/}
          <Box />

          {/*02 Contenido Principal*/}
          <Box sx={{ width: resizeProps.width }}>
            <Toolbar sx={{ width: "100%" }}>
              {/*Icono principal de la aplicacion*/}
              <Typography>
                {/* <NavLink to="/Old_Wave-React-Front"> */}
                <NavLink to="/*">

                  <IconButton
                    //Medidas oficiales 163 ancho y 40 de largo
                    sx={{
                      mt: "9px",
                      mb: "15px",
                      ml: "72px",
                      width: "163px",
                      height: "40px",
                    }}
                  >
                    <img src={logo} alt={"Logo Principal"} />
                  </IconButton>
                </NavLink>
              </Typography>

              {/*Botones de la parte de Izquierda */}
              <Grid container direction="row" justifyContent="end">
                
                {/*Boton de Registro*/}
                <Button
                  color="lightGreyLogin"
                  variant="contained"
                  sx={{
                    //textTransform: Convertir el texto en minuscula o en mayuscula
                    //Estilo del boton
                    textTransform: "none",
                    width: "237px",
                    height: "37px",
                    mt: "13px",
                    mb: "15px",
                    mr: "14px",
                    borderRadius: "19px",
                    boxShadow: "0",
                    display: { xs: "none", sm: "none", md: "block" },

                    //Estilo de la fuente
                    fontFamily: "PoppinsRegular",
                    textAlign: "left",
                    fontSize: "16px",
                  }}
                >
                  Regístrate o inicia sesión
                </Button>

                {/*Botones de Iconos*/}
                <Box sx={{ display: "flex" }}>
                  <IconButton
                    sx={{
                      mt: "16px",
                      mb: "19px",
                      mr: "21px",
                      width: 29,
                      height: 29,
                    }}
                  >
                    <img src={loginIcon} alt={"Login"} />
                  </IconButton>

                  <NavLink to="/shopping-cart">
                    <IconButton
                      sx={{
                        mt: "10px",
                        mb: "19px",
                        mr: "71px",
                        width: 29,
                        height: 36,
                      }}
                    >
                      <img src={carritoIcon} alt={"Shopping Cart"} />
                    </IconButton>
                  </NavLink>
                </Box>
              </Grid>
            </Toolbar>
          </Box>

          {/*03 Div Derecha*/}
          <Box />
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
