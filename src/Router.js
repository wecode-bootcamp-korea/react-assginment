import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Introduce from './pages/Introduce/Introduce';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Introduce />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
 );
};

export default Router;