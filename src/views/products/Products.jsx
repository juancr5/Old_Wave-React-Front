import React, { useContext, useState } from 'react'
import { InitialContext } from '../../context/InitialContext';
import { getProductsByName } from '../../services/ProductServices';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import ProductCard from '../../components/productCard';
import ProductCard1 from '../../components/ProductCard/ProductCard1';
import { Box } from '@mui/material';

const Products = () => {

    // Se importa el Diccionario init del useState desde el useContext de Categories
    const { input, setInput } = useContext(InitialContext)

    const [productData, setProductData] = useState([]);

    const handleClick = (e) => {
        getProductsByName(input.textInput, 1).then((product) => {
            setProductData(product.data.items);
        });
    };

    console.log("hola")

    return (
        <>
            <h1>Products {input.textInput} </h1>

            <Box display="flex" flexDirection="row">

                {/*Caja Lateral*/}
                <Box sx={{ width: "300px", height: "500px", backgroundColor: "black" }}
                >

                </Box>

                <Grid container spacing={4}>
                    {
                        input.AllProducts && (input.AllProducts.length > 0) &&
                        input.AllProducts.map(article => (
                            <Grid key={article} item>
                                <ProductCard1
                                    key={article.product_code}
                                    {...article}
                                />
                            </Grid>
                        ))
                    }
                </Grid>

            </Box>

        </>
    )
}


export default Products;










