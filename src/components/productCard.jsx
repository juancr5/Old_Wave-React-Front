//import "./productCard.css";
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

// const ColorButton = styled(ColorButton)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText('#772CE8'),
//     backgroundColor: '#772CE8',
//     '&:hover': {
//       backgroundColor: '#772CE8',
//     },
//   }));

/**

<Box sx={{
                height: '386px',
                width: '208px',
                m: 2,
            }}>

                <Card sx={{
                    height: '386px',
                    width: '208px',
                    textAlign: 'center',
                    border: '1px solid #E2E2E2',
                    borderRadius: '8px',
                    opacity: 1,
                    margin: '1px'
                }}>

                    <CardMedia
                        component="img"
                        height="207px"
                        width="208px"
                        image={imageInCard(thumbnail)}
                        alt="Producto"
                    />
                    <CardContent sx={{
                        height:"flex",
                        width:"auto",
                        padding: 'auto'
                    }}>
                        <Typography className='title'>
                            {name}
                        </Typography>
                        <Typography className='brand'>
                            {brand}
                        </Typography>
                        <Typography className='price'>
                            {formatNumberToPrice(price)}
                        </Typography>
                        <Button sx={{
                            //Estilo del boton
                            textTransform: 'none',
                            // backgroundColor: '#000',
                            backgroundColor: Colors.lightGreyLogin,
                           
                            width: "119px",
                            height: "19px",
                            borderRadius: "19px",

                            //Estilo de la fuente
                            fontFamily: "PoppinsRegular",
                            textAlign: "left",
                            fontSize: "13px",
                            // color: '#fff',
                            color: Colors.characterLogin,
                            opacity: 1,
                            bottom: '0px'
                        }}
                        >Agregar al Carrito</Button>

                    </CardContent>
                    {/* <CardAction sx={{ mb: 5 }}>
                        {/* <ColorButton variant="contained">Agregar al Carrito</ColorButton> }
                    </CardAction> *}
                    </Card>
                    </Box>

 */
