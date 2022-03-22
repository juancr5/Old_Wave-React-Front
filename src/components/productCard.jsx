import { Card, Button } from "react-bootstrap"
import './productCard.css'
import imageDefault from '../assets/images/product-default.png'

export default function ProductCard({
    // product : {product_code, name, brand, thumbnail, city, price, seller, rating, search_quantity}
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

    
    const thumbnail = "https://firebasestorage.googleapis.com/v0/b/oldwave-fastapi-backend.appspot.com/o/product_thumbnails%2Fimage_2022-03-20_130212.png?alt=media&token=8e1756f2-5a19-4404-87e7-fe6d19198ffc"

    return (
        <>
            <Card className="Card">
                <Card.Img className="img" src={imageInCard(thumbnail)} alt="imagen" />
                <Card.Body>
                    <Card.Title className="title">Nombre</Card.Title>
                    <Card.Text className="marca">Marca</Card.Text>
                    <Card.Text className="precio">
                        {formatNumberToPrice(5000000)}
                    </Card.Text>
                    <Button className="button rounded-pill pt-0 pb-0" style={{ backgroundColor: '#772CE8', borderColor: 'transparent', fontSize: '14px', fontWeight: 'bold' }}>Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

// style={{ backgroundColor: '#772CE8', borderColor: 'transparent', fontSize: '14px' }}