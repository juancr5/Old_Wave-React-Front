import { Card, Button } from "react-bootstrap"
import './productCard.css'
import imageDefault from '../assets/images/product-default.png'

export default function ProductCard({
     product : {product_code, name, brand, thumbnail, city, price, seller, rating, search_quantity}
}) {

    const formatNumberToPrice = (price) => {
        const aux = Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
        return aux;
    }

    const imageInCard = (thumbnail) => {
        if(thumbnail != null && thumbnail !== ""){
            return thumbnail
        }
        return imageDefault
    }

    return (
        <>
            <Card className="Card">
                <Card.Img className="img" src={imageInCard(thumbnail)} alt="imagen" />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text className="brand">{brand}</Card.Text>
                    <Card.Text className="price">
                        {formatNumberToPrice(price)}
                    </Card.Text>
                    <Button className="button rounded-pill pt-0 pb-0" style={{ backgroundColor: '#772CE8', borderColor: 'transparent', fontSize: '14px', fontWeight: 'bold' }}>Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

// style={{ backgroundColor: '#772CE8', borderColor: 'transparent', fontSize: '14px' }}