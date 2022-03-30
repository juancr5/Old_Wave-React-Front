import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../layout/headers/Header';
import Navbar from '../layout/headers/Navbar';
import Home from '../views/home/Home';
import ShoppingCart from '../views/shopping/ShoppingCart';
import ProductsScreen from '../views/products/ProductsScreen';
import ProductScreen from '../views/products/ProductScreen';


const AppRouter = () => {
    return (
        <>
            <Header/>
            <Navbar/>

            <div className="container-fluid">
                <Routes>
                    {/*
                    <Route path="shop" element={<ShopScreen>} />
                    <Route path="product/:Id" element={<ProductScreen/>} />
                    */}

                    <Route path="shopping-cart" element={<ShoppingCart />} />
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<ProductsScreen />} />
                    <Route path="product/:productId" element={<ProductScreen/>} />
                    {/*:productId Parametro a pasar por useParams()*/}

                </Routes>
            </div>

            
        </>

    )
}

export default AppRouter;