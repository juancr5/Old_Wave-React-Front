import { Box, Typography } from '@mui/material';
import React from 'react'
import CardOnlyProduct from '../../components/CardOnlyProduct/CardOnlyProduct';
import CardPromotion from '../../components/CardPromotion/CardPromotion';
import CustomSwiperBanner from '../../components/CustomSwiperBanner/CustomSwiperBanner';
import SwiperIcons from '../../components/SwiperIcons/SwiperIcons';


const Home = () => {

  return (
    <>
      <Box sx={{justifyContent: "center"}}>
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

        {/*Iconos Minimalistas*/}
        <SwiperIcons />

        {/*Promociones*/}

        <Box sx={{width:"100%", mb: 5 }}>
          <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'row', mt: 5 }} >
            <CardPromotion />
            <CardOnlyProduct />
            <CardOnlyProduct />
          </Box>

          <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'row', mt: 5 }} >
          <CardOnlyProduct />
            <CardPromotion />
            <CardOnlyProduct />
        
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default Home;