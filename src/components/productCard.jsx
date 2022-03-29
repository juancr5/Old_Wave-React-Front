import imageDefault from "../assets/images/product-default.png";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function ProductCard({
  product: {
    product_code,
    name,
    brand,
    thumbnail,
    city,
    price,
    seller,
    rating,
    search_quantity,
  },
}) {
  const formatNumberToPrice = (price) => {
    const aux = Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
    return aux;
  };

  const imageInCard = (thumbnail) => {
    if (thumbnail != null && thumbnail !== "") {
      return thumbnail;
    }
    return imageDefault;
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#f7f7f7",
          width: "13rem",
          height: "24.125rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "60%",
            backgroundImage: `url(${imageInCard(thumbnail)})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        ></Box>
        <Box
          sx={{
            width: "100%",
            height: "40%",
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
            <Grid item sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: "12px" }}>{name}</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: "10px", color: "primary.main" }}>
                {brand}
              </Typography>
            </Grid>
            {/* <Grid
            container
            item
            direction="row"
            sx={{ justifyContent: "space-evenly", fontSize: "15px" }}
          > */}
            <Grid item>
              {/* <Typography
                sx={{ fontSize: "12px", textDecoration: "line-through" }}
              >
                $2’300.000
              </Typography> */}
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: "12px", color: "primary.main" }}>
                {formatNumberToPrice(price)}
              </Typography>
            </Grid>
            {/* </Grid> */}
            <Grid item>
              <Button
                sx={{
                  backgroundColor: "#772CE8",
                  color: "white",
                  borderRadius: 10,
                  "&:hover": {
                    backgroundColor: "#9f69f0",
                  },
                  textTransform: "none",
                  fontSize: "13px",
                  p: "3px 20px 3px 20px",
                  m: 3,
                }}
              >
                Agregar al carrito
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}


