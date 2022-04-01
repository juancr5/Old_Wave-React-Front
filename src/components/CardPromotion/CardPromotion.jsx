import React from "react";
import { Box } from "@mui/material";
import ImgPromotion from "../../assets/images/banner-auxiliar-bicicletas@2x.png";

const CardPromotion = () => {
    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                width: "39.063rem",
                height: "12.688rem",
                backgroundImage: `url(${ImgPromotion})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: 2,
            }}
        ></Box>
    );
};

export default CardPromotion;