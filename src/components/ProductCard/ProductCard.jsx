import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
//import ImgPrueba from '../../assets/images/resultado1@2x.png'
import { NavLink } from "react-router-dom";
import { InitialContext } from '../../context/InitialContext';
import { formatNumberToPrice } from "../../utility/methods";

//Trae el procducto como article
const ProductCard = ({
    article, product_code, name, brand, thumbnail, city, price, seller, rating, search_quantity
}) => {

    //console.log(article)
  const { input, setInput } = React.useContext(InitialContext)
  const handleClick = (e) => {
    setInput({
        ...input,
        ShoppingCart: [...input.ShoppingCart, article],
        total: input.total + price,
    });
  }

    return (
        <>
            <Box
                sx={{
                    bgcolor: "#f7f7f7",
                    width: "208px",
                    height: "490px",
                    ml: "10px",
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                }}
            >
                {/*Quita la letras de color azul y la linea debajo a los links style={{color: 'inherit', textDecoration: 'inherit'}}*/}
                <NavLink to={`/product/${product_code}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>

                    {/*Imagen*/}
                    <Box
                        sx={{
                            width: "100%",
                            height: "225px",
                            //backgroundImage: `url(${ImgPrueba})`,
                            backgroundImage: `url(${thumbnail})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                        }}
                    ></Box>

                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/*Nombre*/}
                        <Grid item sx={{ mt: 1 }}>
                            <Box sx={{
                                width: "154px",
                                height: "53px",
                                maxHeight: "53px",
                                //Esconde el texto del maximo de maxHeight
                                overflow: "hidden",
                            }}>
                                <Typography align="center" sx={{ ml: "2px", fontFamily: "PoppinsMedium", fontSize: "13px", lineHeight: "17px" }}>
                                    {name}
                                </Typography>
                            </Box>
                        </Grid>

                        {/*Marca*/}
                        <Grid item>
                            <Typography sx={{ mt: "4px", fontFamily: "PoppinsSemiBold", fontSize: "13px", color: "violetMain.main" }}>
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
                                    {city}
                                </Typography>
                            </Grid>
                        </Grid>

                        {/*Precio*/}
                        <Grid item>
                            <Typography sx={{ fontFamily: "PoppinsBold", fontSize: "14px", color: "violetMain.main" }}>
                                {formatNumberToPrice(price)}
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
                                    align="center"
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
                                <Typography align="center" sx={{ ml: "5px", fontFamily: "PoppinsRegular", fontSize: "14px" }}>
                                    {seller}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </NavLink>

                {/*Boton Agregar al carro de Compras*/}
                <Box item sx={{ mt: "-14px" }}>
                    <Button
                        onClick={() => handleClick()}
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
        </>
    );
};

export default ProductCard;