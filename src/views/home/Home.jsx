import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import CardOnlyProduct from '../../components/CardOnlyProduct/CardOnlyProduct';
import CardPromotion from '../../components/CardPromotion/CardPromotion';
import CustomSwiperBanner from '../../components/CustomSwiperBanner.jsx/CustomSwiperBanner';
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

        {/*Iconos Minimalistas*/}
        <SwiperIcons />
      </Box>
    
       {/*Promociones*/}
  
        <Grid container item direction="row" sx={{ flexWrap: "nowrap", pb: 5}}>
          <Grid item>
            <CardPromotion />
          </Grid>
          <Grid
            item
            container
            xs={6}
            direction="row"
            sx={{ flexWrap: "nowrap" }}
          >
            <Grid item>
              <CardOnlyProduct />
            </Grid>
            <Grid item>
              <CardOnlyProduct />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container item direction="row" sx={{ flexWrap: "nowrap" }}>
          <Grid
            item
            container
            xs={6}
            direction="row"
            sx={{ flexWrap: "nowrap" }}
          >
            <Grid item>
              <CardOnlyProduct />
            </Grid>
            <Grid item>
              <CardOnlyProduct />
            </Grid>
          </Grid>
          <Grid item>
            <CardPromotion />
          </Grid>
        </Grid>



    </>
  )
}

export default Home;