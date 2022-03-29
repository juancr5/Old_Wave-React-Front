import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ImgPrueba from '../../assets/images/resultado1@2x.png'

const ProductCard1 = () => {
    return (
        <Box
            sx={{
                bgcolor: "#f7f7f7",
                width: "208px",
                height: "386px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "225px",
                    //backgroundImage: `url(${ImgPrueba})`,
                    backgroundImage: `url(${ImgPrueba})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}
            ></Box>
            <Box
                sx={{
                    width: "100%",
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sx={{ mt: 1 }}>
                        <Box sx={{ width: "154px", height: "35px" }}>
                            <Typography sx={{ ml: "2px", fontFamily: "PoppinsMedium", fontSize: "13px" }}>
                                Televisor Panasonic led Smart TV full HD 47''
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Typography sx={{ mt: "12px", fontFamily: "PoppinsSemiBold", fontSize: "12px", color: "violetMain.main" }}>
                            Apple
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="row"
                        sx={{ mt:"4px", justifyContent: "space-evenly" }}
                    >
                        <Grid item> 
                            <Typography
                                sx={{ fontFamily: "PoppinsRegular", fontSize: "14px", textDecoration: "line-through" }}
                            >
                                $3’250.000
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontFamily: "PoppinsBold", fontSize: "14px", color: "violetMain.main" }}>
                                $2’300.000
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx={{mt:"-14px"}}>
                        <Button
                            sx={{
                                width:"166px",
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProductCard1;