import React, { useContext, useState } from "react";
import { InitialContext } from "../../context/InitialContext";
import { getProductsByName } from "../../services/ProductServices";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ProductCard from "../../components/productCard";

const Products = () => {
  // Se importa el Diccionario init del useState desde el useContext de Categories
  const { input, setInput } = useContext(InitialContext);
  const [productData, setProductData] = useState([]);

  const handleClick = (e) => {
    getProductsByName(input.textInput, 1).then((product) => {
      setProductData(product.data.items);
    });
  };

  return (
    <>
      <h1>Products {input.textInput} </h1>

      <Button onClick={() => handleClick()}>Buscar</Button>

      <Grid container spacing={5}>
        {input.AllProducts &&
          input.AllProducts.length > 0 &&
          input.AllProducts.map((item) => (
            <ProductCard key={item.product_code} product={item} />
          ))}
      </Grid>
    </>
  );
};

export default Products;
