import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
    return (
        <BrowserRouter>
                <Routes>                    
                    <Route path="/" element={<Introduce/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/productList" element={<ProductList/>} />
                </Routes>
        </BrowserRouter>


    );
};

export default Router;