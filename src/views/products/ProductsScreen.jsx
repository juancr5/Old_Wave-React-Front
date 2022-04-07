import React, { useContext } from 'react'
import { InitialContext } from '../../context/InitialContext';
import Grid from "@mui/material/Grid";
import ProductCard from '../../components/ProductCard/ProductCard';
import { Box } from '@mui/material';

const ProductsScreen = () => {

    // Se importa el Diccionario init del useState desde el useContext de Categories
    const { input, setInput } = useContext(InitialContext)
    const { inputS, setInputS } = useContext(InitialContext)

    return (
        <>
            <Box display="flex" flexDirection="row" sx={{my:3}}>

                {/*Caja Lateral*/}
                <Box sx={{ width: "300px", height: "1100px", backgroundColor: "lightGreyLogin.main" }}>
                </Box>
                
                <Grid container spacing={4}>
                    {
                            
                        input.AllProducts && (input.AllProducts.length > 0) &&
                        input.AllProducts.map(article => (
                            /*Clave unica para el Grid y el ProductCard*/
                            <Grid key={article.product_code} item>
                                <ProductCard
                                    key={article.product_code}
                                    {...article}
                                    //Envia el producto atraves del props
                                    article = {article}
                                />
                            </Grid>
                        ))
                    }
                            
                                {
                                    inputS.AllProducts && (inputS.AllProducts.length > 0) &&
                                    inputS.AllProducts.map(article => (
                                        <Grid key={article.productCode} item>
                                <ProductCard
                                    key={article.productCode}
                                    {...article}
                                    //Envia el producto atraves del props
                                    article = {article}
                                />
                                        </Grid>
                                    ))
                                }
                            
                </Grid>

            </Box>

        </>
    )
}


export default ProductsScreen;
