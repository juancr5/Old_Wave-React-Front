import { Box, Button, Grid, Typography } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductImagesSwiper from '../../components/ProductImagesSwiper/ProductImagesSwiper';
import { getProductDesc, getProductsByName } from '../../services/ProductServices';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductScreen = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    //Tamaños ajustables de los componentes
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const resizeProps = {
        width: matches ? "default" : "1366px",
        justifyContent: matches ? "default" : "center",
        display: matches ? "default" : "flex"

    };

    // 
    useEffect(() => {
        getProductDesc(productId) .then((item) => {
            setProduct(item.data);
        });
    }, []);

    //Desestructuracion del objeto product
    const { images, name, description, brand, city, price, rating } = product;





    return (
        <>
            <Box sx={{ display: resizeProps.display, justifyContent: resizeProps.justifyContent }}>

                {/*02 Contenido Principal*/}
                <Box display="flex" flexDirection="row" mt="50px" mb="100px" sx={{ justifyContent: "center", width: "1366px", border: "1px" }}  >

                <Box
                    sx={{
                        border: 1,
                        width: "50px",
                        height: "100%",
                        bgcolor: "#f7f7f7",
                        alignItems: "center",
                    }}
                >
s
                </Box>

                    {/*Contenido Del Slider */}
                    <Box sx={{ width: "70%", border: 1 }}>
                        {/*Condicion que verifica si una variable es undefined y si lo es, no lo deja ejecutar */}
                        {/* (images) && <ProductImagesSwiper images={images}/> */}
                        {(images) ? <ProductImagesSwiper images={images} /> : 'loading...'}
                    </Box>

                    {/*Contenido Producto */}
                    <Box
                        sx={{
                            border: 1,
                            width: "500px",
                            height: "100%",
                            bgcolor: "#f7f7f7",
                            alignItems: "center",
                        }}
                    >

                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ border: 1 }}
                        >
                            {/*Nombre*/}
                            <Grid>
                                <Typography sx={{ ml: 2, mr: 2, fontFamily: "PoppinsBold", fontSize: "25px", lineHeight: "30px" }}>
                                    {name}
                                </Typography>
                            </Grid>

                            {/*Marca*/}
                            <Grid item>
                                <Typography sx={{ mt: 3, fontFamily: "PoppinsSemiBold", fontSize: "20px", color: "violetMain.main" }}>
                                    {brand}
                                </Typography>
                            </Grid>

                            {/*Ciudad*/}
                            <Grid
                                container
                                item
                                direction="row"
                                justifyContent="center"
                                sx={{
                                    mt: "4px",
                                    //justifyContent: "space-evenly"
                                }}
                            >
                                <Grid item>
                                    <Typography
                                        sx={{
                                            fontFamily: "PoppinsRegular",
                                            fontSize: "14px"
                                            //textDecoration: "line-through"
                                        }}
                                    >
                                        Ciudad:
                                    </Typography>
                                </Grid>
                                <Grid item
                                    sx={{
                                        height: "40px",
                                        maxHeight: "40px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Typography sx={{ ml: "5px", fontFamily: "PoppinsBold", fontSize: "14px", color: "violetMain.main" }}>
                                        {/*city*/}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/*Precio*/}
                            <Grid item>
                                <Typography sx={{ fontFamily: "PoppinsBold", fontSize: "14px", color: "violetMain.main" }}>
                                    {"$" + price}
                                </Typography>
                            </Grid>

                            {/*Vendedor*/}
                            <Grid
                                container
                                item
                                direction="row"
                                justifyContent="center"
                                sx={{
                                    mt: "4px",
                                    //justifyContent: "space-evenly"
                                }}
                            >
                                <Grid item >
                                    <Typography
                                        sx={{
                                            fontFamily: "PoppinsRegular",
                                            fontSize: "14px"
                                            //textDecoration: "line-through"

                                        }}

                                    >
                                        Vendedor:
                                    </Typography>
                                </Grid>

                                <Grid item
                                    sx={{
                                        height: "40px",
                                        maxHeight: "40px",
                                        overflow: "hidden",
                                        border: 1,

                                    }}
                                >
                                    <Typography sx={{ ml: "5px", fontFamily: "PoppinsRegular", fontSize: "14px" }}>
                                        {/*seller*/}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>



                        {/*Boton Agregar al carro de Compras*/}
                        <Box item sx={{ mt: "-14px" }}>
                            <Button
                                sx={{
                                    width: "166px",
                                    backgroundColor: "violetMain.main",
                                    color: "white",
                                    borderRadius: 10,
                                    "&:hover": {
                                        backgroundColor: "violetMain.secondary",
                                    },
                                    textTransform: "none",
                                    fontFamily: "PoppinsSemiBold",
                                    fontSize: "13px",
                                    p: "3px 20px 3px 20px",
                                    m: 3
                                }}
                            >
                                Agregar al carrito
                            </Button>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </>
    )


}

export default ProductScreen;