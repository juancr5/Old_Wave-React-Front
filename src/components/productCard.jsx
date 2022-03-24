import './ProductCard.css'
import imageDefault from '../assets/images/product-default.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button, { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
// import CardAction from '@mui/material/CardActions';
import { Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Colors } from '../../assets/colorsStyle';


export default function ProductCard({
    product: { product_code, name, brand, thumbnail, city, price, seller, rating, search_quantity }
}) {

    const formatNumberToPrice = (price) => {
        const aux = Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
        return aux;
    }

    const imageInCard = (thumbnail) => {
        if (thumbnail != null && thumbnail !== "") {
            return thumbnail
        }
        return imageDefault
    }

    return (
        <>
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
                            backgroundColor: '#000',
                            // backgroundColor: Colors.lightGreyLogin,
                           
                            width: "119px",
                            height: "19px",
                            borderRadius: "19px",

                            //Estilo de la fuente
                            fontFamily: "PoppinsRegular",
                            textAlign: "left",
                            fontSize: "13px",
                            color: '#fff',
                            // color: Colors.characterLogin,
                            opacity: 1,
                            bottom: '0px'
                        }}
                        >Agregar al Carrito</Button>

                    </CardContent>
                    {/* <CardAction sx={{ mb: 5 }}>
                        {/* <ColorButton variant="contained">Agregar al Carrito</ColorButton> }
                    </CardAction> */}
                </Card>
            </Box>
        </>
    )
}

// const ColorButton = styled(ColorButton)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText('#772CE8'),
//     backgroundColor: '#772CE8',
//     '&:hover': {
//       backgroundColor: '#772CE8',
//     },
//   }));