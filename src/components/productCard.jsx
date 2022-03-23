import './ProductCard.css'
import imageDefault from '../assets/images/product-default.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

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
                    <Button className='button'>Agregar al Carrito</Button>
                </CardActions>
            </Card>
        </>
    )
}