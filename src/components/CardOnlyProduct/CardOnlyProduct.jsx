import React from "react";
import { Box } from "@mui/material";
import ImgOnlyProduct from "../../assets/images/producto2@2x.png";

const CardOnlyProduct = () => {
  return (
    <Box
      sx={{
          display: 'flex',
        bgcolor: "#f7f7f7",
        width: "16rem",
        height: "12.625rem",
        borderRadius: 2,
        justifyContent: 'center'
      }}
    >
      <img
        src={ImgOnlyProduct}
        alt="prueba"
        width="186px"
        height="167px"
        style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      />
    </Box>
  );
};

export default CardOnlyProduct;