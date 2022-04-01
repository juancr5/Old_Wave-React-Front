import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { StyleParameters } from "../../assets/StyleParameters";
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

const Suscription = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const findProps = {
    variant: matches ? "contained" : "outlined",
    borderBottomLeftRadius: "19px",
    borderTopLeftRadius: "19px",
    marginLeft: matches ? "0px" : "8px",
    color1: matches ? "whiteMain.main" : "violetMain.main",
    color2: matches ? "lightGreyLogin.characterLogin" : "whiteMain.main",
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: "128px",
          backgroundColor: "violetMain.main",
        }}
      >
        <Box sx={{ alignItems: "center", justifyContent: "center" }}>
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
            Recibe información de nuestras ofertas
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            {/* Ingrese texto */}
            <Email>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "lightGreyLogin.input",
                  textAlign: "left",
                  letterSpacing: "0px",
                  opacity: 1,
                  fontFamily: "PoppinsRegular",
                  width: "216px",
                  height: "21px",
                  margin: "revert",
                  ml: "20px",
                  mt: "9px"
                }}
              >
                Ingrese su correo
              </Typography>
            </Email>
            {/* Boton */}
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
          {/* Texto */}
          <Typography
            sx={{
              fontSize: "13px",
              color: "whiteMain.main",
              textAlign: "center",
              letterSpacing: "0px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            *Al suscribirme acepto recibir emails e información de oldwaves,
            bajo sus Políticas de datos personales
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Suscription;
