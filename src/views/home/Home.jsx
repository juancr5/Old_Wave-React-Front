import { Box, Typography } from '@mui/material';
import React from 'react'
import CustomSwiperBanner from '../../components/CustomSwiperBanner/CustomSwiperBanner';
import ProductCard from '../../components/ProductCard/ProductCard';
import SwiperIcons from '../../components/SwiperIcons/SwiperIcons';


const Home = () => {

  return (
    <>
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


       <ProductCard/>

      </Box>
    </>
  )
}

export default Home;