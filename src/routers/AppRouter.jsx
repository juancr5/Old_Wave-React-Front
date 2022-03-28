import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../layout/headers/Header';
import Navbar from '../layout/headers/Navbar';
import Home from '../views/home/Home';
import ShoppingCart from '../views/shopping/ShoppingCart';
import Products from '../views/products/Products';



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
                    <Route path="/products" element={<Products />} />

                </Routes>
            </div>

            
        </>

    )
}

export default AppRouter;