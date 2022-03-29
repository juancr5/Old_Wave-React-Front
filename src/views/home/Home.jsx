<<<<<<< HEAD
import { Box, Typography } from '@mui/material';
import React from 'react'
import CustomSwiperBanner from '../../components/CustomSwiperBanner.jsx/CustomSwiperBanner';
import ProductCard1 from '../../components/ProductCard/ProductCard1';
import SwiperIcons from '../../components/SwiperIcons/SwiperIcons';

=======
import React from "react";
>>>>>>> 8ad0d44448952971e75c5911abf309312d8b0ca3

const Home = () => {
  return (
    <>
<<<<<<< HEAD
      <Box>
        {/*Slider de Imagenes*/}
        <CustomSwiperBanner />

        {/*Mensaje: Que Estás Buscando*/}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "35px",
              color: "violetMain.main",
              //Estilo de la fuente
              fontFamily: "PoppinsSemiBold",
              textAlign: "left",
            }}>
            ¿Qué estás buscando hoy?
          </Typography>
        </Box>

        {/*Mensaje: Que Estás Buscando*/}
        <SwiperIcons/>


       <ProductCard1/>

      </Box>
    </>
  )
}
=======
      <h1>Imagen</h1>
      <h1>Carrusel</h1>
      <h1>Productos</h1>
    </>
  );
};
>>>>>>> 8ad0d44448952971e75c5911abf309312d8b0ca3

export default Home;
