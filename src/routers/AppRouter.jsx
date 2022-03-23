import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/headers/Header';
import Navbar from '../components/headers/Navbar';
import Home from '../views/home/Home';
import ShoppingCart from '../views/shopping/ShoppingCart';


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
                </Routes>
            </div>
        </>

    )
}

export default AppRouter;