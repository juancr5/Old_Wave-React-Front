import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState, } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ProductImagesSwiper from '../../components/ProductImagesSwiper/ProductImagesSwiper';
import { getProductDesc } from '../../services/ProductServices';
import { getProductDescS } from '../../services/SpringProductService';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Rating from '@mui/material/Rating';
import { InitialContext } from '../../context/InitialContext';
import { formatNumberToPrice } from "../../utility/methods";


//Importar Imagenes
import creditCard from '../../assets/icons/credit-card.svg'


const ProductScreen = () => {

    // Se importa el Diccionario init del useState desde el useContext de Categories
    const { input, setInput } = React.useContext(InitialContext);
    const { inputS, setInputS } = React.useContext(InitialContext);

    //Trae desde el Location del React Router el props asignado desde el link to del ProductCard
    const location = useLocation();
    const article = location.state;

    const handleClick = (e) => {
        setInput({
            ...input,
            ShoppingCart: [...input.ShoppingCart, article],
            total: input.total + price,
        });
        setInputS({
            ...input,
            ShoppingCart: [...input.ShoppingCart, article],
            total: input.total + price,
        });
    }


    //Trae los parametros desde el React Router Dom
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
        getProductDesc(productId).then((item) => {
            setProduct(item.data);
        });
        getProductDescS(productId).then((item) => {
            setProduct(item.data);
        });
    }, []);

    //Desestructuracion del objeto product
    const { images, name, description, brand, city, reseller, price, rating} = product;


    return (
        <>
            <Box sx={{ display: resizeProps.display, flexDirection: "column", alignItems: resizeProps.justifyContent, }}>

                {/*01 Contenido Principal*/}
                <Box display="flex" flexDirection="row" mt="50px" sx={{ width: resizeProps.width }}  >

                    {/*01.1 Contenido Del Slider */}
                    <Box sx={{ width: "70%" }}>
                        {/*Condicion que verifica si una variable es undefined y si lo es, no lo deja ejecutar */}
                        {/* (images) && <ProductImagesSwiper images={images}/> */}
                        {(images) ? <ProductImagesSwiper images={images} /> : 'loading...'}
                    </Box>

                    {/*01.2 Contenido Producto */}
                    <Box
                        sx={{
                            width: "500px",
                            height: "100%",
                            bgcolor: "primary.main",
                        }}
                    >

                        <Grid
                            container
                            direction="column"
                        >
                            {/*Nombre*/}
                            <Grid>
                                <Typography sx={{ fontFamily: "PoppinsBold", fontSize: "25px", lineHeight: "30px" }}>
                                    {name}
                                </Typography>
                            </Grid>

                            {/*Marca*/}
                            <Grid item>
                                <Typography sx={{ mt: 2, fontFamily: "PoppinsSemiBold", fontSize: "20px", color: "violetMain.main" }}>
                                    {brand}
                                </Typography>
                            </Grid>

                            {/*Descripcion*/}
                            <Grid item sx={{ mt: 2 }}>
                                <Typography sx={{ fontFamily: "PoppinsRegular", fontSize: "18px" }}>
                                    Descripción:
                                </Typography>
                                <Typography sx={{ fontFamily: "PoppinsRegular", fontSize: "18px" }}>
                                    {description}
                                </Typography>
                            </Grid>

                            {/*Precio*/}
                            <Grid item sx={{ mt: 2 }}>
                                <Typography sx={{ fontFamily: "PoppinsBold", fontSize: "25px", color: "violetMain.main" }}>
                                    {formatNumberToPrice(price)}
                                </Typography>
                            </Grid>

                            {/*Ciudad*/}
                            <Grid item sx={{ mt: 1 }}>
                                <Typography sx={{ fontFamily: "PoppinsRegular", fontSize: "20px" }}>
                                    Ciudad: {city}
                                </Typography>
                            </Grid>

                             {/*Rating*/}
                            <Grid item sx={{ mt: 1 }}>
                                <Rating name="read-only" value={parseInt(rating)} readOnly />
                            </Grid>

                            {/*Tarjeta de Credito*/}
                            <Grid item sx={{ ml: -1 }}>
                                <img src={creditCard} alt={"Tarjetas de Cretido"} height="100px" />
                            </Grid>

                            {/*Vendedor*/}
                            <Grid>
                                <Typography
                                    sx={{
                                        fontFamily: "PoppinsRegular",
                                        fontSize: "20px"
                                    }}
                                >
                                    Vendedor: {reseller}
                                </Typography>
                            </Grid>

                        </Grid>

                        {/*Botones Agregar al carro de Compras*/}
                        <Box sx={{ mt: 3, mb: 5, display: "flex", flexDirection: "Column", alignItems: "Center" }}>
                            <Button
                                onClick={() => handleClick()}
                                sx={{
                                    width: "250px",
                                    backgroundColor: "violetMain.main",
                                    color: "white",
                                    borderRadius: 10,
                                    "&:hover": {
                                        backgroundColor: "violetMain.secondary",
                                    },
                                    textTransform: "none",
                                    fontFamily: "PoppinsSemiBold",
                                    fontSize: "16px",
                                }}
                            >
                                Agregar al carrito
                            </Button>

                            <Button
                                sx={{
                                    mt: 2,
                                    width: "250px",
                                    backgroundColor: "violetMain.secondary",
                                    color: "white",
                                    borderRadius: 10,
                                    "&:hover": {
                                        backgroundColor: "violetMain.main",
                                    },
                                    textTransform: "none",
                                    fontFamily: "PoppinsSemiBold",
                                    fontSize: "16px",
                                }}
                            >
                                Comprar
                            </Button>
                        </Box>

                    </Box>
                </Box>

                <Box sx={{
                    mb: "100px",
                    width: resizeProps.width,
                    height: "20px",
                    backgroundImage: 'linear-gradient(90deg, rgba(119,44,232,1) 11%, rgba(50,209,247,1) 50%, rgba(159,105,240,1) 90%)'
                }}
                />

            </Box>
        </>
    )


}

export default ProductScreen;