import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../layout/headers/Header";
import Navbar from "../layout/headers/Navbar";
import Home from "../views/home/Home";
import ShoppingCart from "../views/shopping/ShoppingCart";
import ProductsScreen from "../views/products/ProductsScreen";
import AboutUs from "../layout/footers/Aboutus";
import Suscription from "../layout/footers/Suscription";
import Services from "../layout/footers/Services";
import Credits from "../layout/footers/Credits";
import ProductScreen from "../views/products/ProductScreen";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="/Old_Wave-React-Front" element={<Home />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="product/:productId" element={<ProductScreen />} />
          {/*:productId Parametro a pasar por useParams()*/}
        </Routes>
      </div>
      <footer>
        <Services />
        <Suscription />
        <AboutUs />
        <Credits />
      </footer>
    </>
  );
};

export default AppRouter;
