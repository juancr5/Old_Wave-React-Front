import './ProductCard.css'
import imageDefault from '../assets/images/product-default.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';


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
            <Card className='Card'>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageInCard(thumbnail)}
                    alt="Producto"
                />
                <CardContent>
                    <Typography className='title'>
                        {name}
                    </Typography>
                    <Typography className='brand'>
                        {brand}
                    </Typography>
                    <Typography className='price'>
                    {formatNumberToPrice(price)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ColorButton variant="contained">Agregar al Carrito</ColorButton>
                </CardActions>
            </Card>
        </>
    )
}

const ColorButton = styled(ColorButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#772CE8'),
    backgroundColor: '#772CE8',
    '&:hover': {
      backgroundColor: '#772CE8',
    },
  }));