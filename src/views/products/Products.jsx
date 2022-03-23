import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { getProductsByName } from '../../services/ProductServices';
import Grid from "@mui/material/Grid";
import Button, { ButtonProps } from '@mui/material/Button';

const Products = () => {
    const [productData, setProductData] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    const handleOnChange = (e) => {
        const value = e.target.value;
        setSearchValue(value)
    };
    const handleClick = (e) => {
        getProductsByName("", 1).then((product) => {
            setProductData(product.data.items);
        });
    };


    return (
        <>
            <Button onClick={() => handleClick()}>Buscar</Button>
            <Grid container spacing={2}>
                {productData && productData.map((item) => (
                    <ProductCard key={item.product_code} product={item} />
                    // <li key={i}>{item}</li>
                ))}
            </Grid>
        </>
    )
}

export default Products