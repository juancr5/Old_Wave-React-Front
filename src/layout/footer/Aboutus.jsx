import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Grid, Typography } from "@mui/material";

import logo from "../../assets/icons/logo-oldwave-footer.svg";
import fb from "../../assets/icons/icon-facebook.svg";
import ins from "../../assets/icons/icon-instagram.svg";

const AboutUs = () => {
   
  return (
    <>
      <Grid container position="static" item direction="row" spacing={15}>
        <Grid item sx={{ mt: 2 }} >
          <IconButton
            sx={{
              mt: "10px",
              mb: "15px",
              ml: "72px",
              width: "122px",
              height: "89px",
            }}
          >
            <img src={logo} alt={"Logo Footer"} />
          </IconButton>
        </Grid>

        <Grid item sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "violetMain.main",
              textAlign: "left",
              letterSpacing: "0px",
              opacity: 1,
            }}
          >
            oldwave
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "characterLogin.main",
              textAlign: "left",
              letterSpacing: "0.46px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            ¿Quiénes somos?
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "characterLogin.main",
              textAlign: "left",
              letterSpacing: "0.46px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            Nuestras tiendas
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "violetMain.main",
              textAlign: "left",
              letterSpacing: "0px",
              opacity: 1,
            }}
          >
            Links de interés
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "characterLogin.main",
              textAlign: "left",
              letterSpacing: "0.46px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            Preguntas frecuentes
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "characterLogin.main",
              textAlign: "left",
              letterSpacing: "0.46px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            Términos y condiciones
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "characterLogin.main",
              textAlign: "left",
              letterSpacing: "0.46px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            Políticas de devoluciones
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "violetMain.main",
              textAlign: "left",
              letterSpacing: "0px",
              opacity: 1,
            }}
          >
            Contácto
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "characterLogin.main",
              textAlign: "left",
              letterSpacing: "0.46px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            servicioalcliente@oldwave.co
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "characterLogin.main",
              textAlign: "left",
              letterSpacing: "0.46px",
              opacity: 1,
              fontFamily: "PoppinsRegular",
            }}
          >
            Telefono: 316 1924
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "violetMain.main",
              textAlign: "left",
              letterSpacing: "0px",
              opacity: 1,
            }}
          >
            Redes Sociales
          </Typography>
          <Box>
            <IconButton
              sx={{
                width: "35px",
                height: "35px",
                margin: "3px"
              }}
            >
              <img src={fb} alt={"Facebook"} />
            </IconButton>
            <IconButton
              sx={{
                width: "35px",
                height: "35px",
                margin: "3px"
              }}
            >
              <img src={ins} alt={"Instagram"} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
