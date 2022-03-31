import React, { useContext } from 'react'
import { InitialContext } from '../../context/InitialContext';
import Grid from "@mui/material/Grid";
import ProductCard from '../../components/ProductCard/ProductCard';
import { Box } from '@mui/material';

const ProductsScreen = () => {

    // Se importa el Diccionario init del useState desde el useContext de Categories
    const { input, setInput } = useContext(InitialContext)

    /*
    const handleClick = (e) => {
        getProductsByName(input.textInput, 1).then((product) => {
            setInput (product.data.items);
        });
    };
    */

    return (
        <>
            <h1>Products {input.textInput} </h1>

            <Box display="flex" flexDirection="row">

                {/*Caja Lateral*/}
                <Box sx={{ width: "300px", height: "1000px", backgroundColor: "black" }}>
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
                </Grid>

            </Box>

        </>
    )
}


export default ProductsScreen;
