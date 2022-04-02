import { Box, Grid, Typography } from "@mui/material";
import { formatNumberToPrice } from "../../utility/methods";
import Rating from "@mui/material/Rating";

const ShopCard = ({
  article,
  product_code,
  name,
  brand,
  thumbnail,
  city,
  price,
  seller,
  rating,
  search_quantity,
}) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.main",
          width: "208px",
          height: "350px",
          ml: "10px",
          border: 0,
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
          <Grid item>
            <Grid item sx={{ mt: 1 }}>
              <Box
                sx={{
                  width: "154px",
                  height: "53px",
                  maxHeight: "53px",
                  //Esconde el texto del maximo de maxHeight
                  overflow: "hidden",
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    ml: "2px",
                    fontFamily: "PoppinsMedium",
                    fontSize: "13px",
                    lineHeight: "17px",
                  }}
                >
                  {name}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              sx={{
                fontFamily: "PoppinsBold",
                fontSize: "14px",
                color: "violetMain.main",
              }}
            >
              {formatNumberToPrice(price)}
            </Typography>
          </Grid>
          {/* <Grid item> */}
          <Box
            sx={{
              width: "100%",
              height: "225px",
              //backgroundImage: `url(${ImgPrueba})`,
              backgroundImage: `url(${thumbnail})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />

          {/*Rating*/}
          <Grid item>
            <Rating name="read-only" value={parseInt(rating)} readOnly />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ShopCard;
