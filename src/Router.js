import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Introduce from "./Introduce/Introduce";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Introduce/>} />
                <Route path = "/Product" element={<Product/>} />
                <Route path = "/ProductList" element={<ProductList/>} />
            </Routes>
        </BrowserRouter>

    );
};

export default Router;