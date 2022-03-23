import React, { useState } from 'react'
//import ProductCard from '../../components/ProductCard'
import { getProductsByName } from '../../services/ProductServices';
import { Button } from 'react-bootstrap'


const Products = () => {
    const [productData, setProductData] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    const handleOnChange = (e) => {
        const value = e.target.value;
        setSearchValue(value)
    };
    const handleClick = (e) => {
        console.log("iphone")
        getProductsByName("iphone").then((product) => {
            setProductData(product.data.results);
            console.log(productData);
        });
    };


    return (
        <>
            {/* <Button onClick={() => handleClick()}>Buscar</Button>
            <ul>
                {productData.map((item, i) => (
                    // <ProductCard key={item.product_code} product={item} />
                    <li key={i}>{item}</li>
                ))}
            </ul> */}

            {/*
            <ProductCard product={{
                "product_code": "1",
                "name": "iPhone 13 128 GB",
                "brand": "Apple",
                "thumbnail": "https://firebasestorage.googleapis.com/v0/b/oldwave-fastapi-backend.appspot.com/o/product_thumbnails%2Fimage_2022-03-19_000715.png?alt=media&token=f9fd4202-a384-440f-9ae4-1c1ac2dba837",
                "city": "Medellin",
                "price": 70000,
                "seller": "Ernesto Perez Frailejón Dev",
                "rating": 5,
                "search_quantity": 30
            }} />

        */}
        </>
    )
}

export default Products
