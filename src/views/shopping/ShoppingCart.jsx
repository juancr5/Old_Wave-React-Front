import { Grid, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import ShopCard from "../../components/Shopcard/ShopCard";
import { InitialContext } from "../../context/InitialContext";
import { formatNumberToPrice } from "../../utility/methods";

const ShoppingCart = () => {
  const { input, setInput } = useContext(InitialContext);
  return (
    <>
      <Box sx={{ ml: 4, mt:5 }}>
        <Typography
          sx={{
            fontFamily: "PoppinsRegular",
            fontSize: "30px",
            color: "violetMain.main"
          }}
        >
          Tus Productos
        </Typography>
      </Box>

      <Box display="flex" flexDirection="row" mt="50px" mb="100px">
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
        <h1>Total: {formatNumberToPrice(input.total)}</h1>
      </Box>
    </>
  );
};

export default ShoppingCart;
