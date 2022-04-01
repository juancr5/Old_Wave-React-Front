import { Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import ShopCard from "../../components/shopcard/ShopCard";
import { InitialContext } from "../../context/InitialContext";

const ShoppingCart = () => {
  const { input, setInput } = useContext(InitialContext);
  return (
    <>
      <h1>Tus Productos</h1>
      <Box display="flex" flexDirection="row">
        <Grid container spacing={4}>
          {input.ShoppingCart &&
            input.ShoppingCart.length > 0 &&
            input.ShoppingCart.map((article) => (
              <Grid key={article.product_code} item>
                <ShopCard
                  key={article.product_code}
                  {...article}
                  article={article}
                />
              </Grid>
            ))}
        </Grid>
        <h1>Total: {input.total}</h1>
      </Box>
    </>
  );
};

export default ShoppingCart;
