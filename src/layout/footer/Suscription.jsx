import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { StyleParameters } from "../../assets/StyleParameters";
import InputBase from "@mui/material/InputBase";
import { Colors } from "../../assets/colorsStyle";
import { Typography } from "@mui/material";

const Colores = StyleParameters.palette;

const Email = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: Colores.whiteMain.main,
  height: "38px",
  width: "324px",
  borderRadius: "19px",
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //Estilo de la fuente
  color: Colors.lightGreySearch.main,
  fontFamily: "PoppinsRegular",
  textAlign: "left",
  fontSize: "15px",
  opacity: 1,

  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "635px",
    //Largo de la cadena de caracteres en el buscador
    [theme.breakpoints.down("md")]: {
      width: "120px",
    },
  },
}));

const Suscription = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const findProps = {
    variant: matches ? "contained" : "outlined",
    borderBottomLeftRadius: matches ? "0px" : "19px",
    borderTopLeftRadius: matches ? "0px" : "19px",
    marginLeft: matches ? "0px" : "8px",
    color1: matches ? "whiteMain.main" : "violetMain.main",
    color2: matches ? "lightGreyLogin.characterLogin" : "whiteMain.main",
  };

  const emailProps = {
    fontSize: matches ? "13px" : "15px",
    marginTop: matches ? "6px" : "4px",
  };
  return (
    <>
      <AppBar position="static" color="violetMain" sx={{ width: "100%", height: "128px" }}>
        <Toolbar disableGutters="true">
          <Box>
            <Typography
              sx={{
                fontSize: "26px",
                color: "whiteMain.main",
                textAlign: "left",
                letterSpacing: "-0.57px",
                opacity: 1,
                fontFamily: "PoppinsRegular",
              }}
            >
              Suscribete a nuestro Boletin
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "whiteMain.main",
                textAlign: "left",
                letterSpacing: "0px",
                opacity: 1,
                fontFamily: "PoppinsRegular",
              }}
            >
              Recibe infromación de nuestras ofertas
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "80px" }}>
            <Email>Ingresa tu correo (corregir esta monda)</Email>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Button
              variant={findProps.variant}
              sx={{
                height: "38.19px",
                width: "323.52px",
                marginLeft: findProps.marginLeft,
                textTransform: "none",
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
                opacity: 1,
              }}
            >
              Suscribirme
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Suscription;
