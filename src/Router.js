import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce';
import Product from './pages/Product/Product';
import Productlist from './pages/ProductList/ProductList';
import Review from './pages/Product/components/Review/Review';
import Count from './pages/Product/components/Count/Count';
import Color from './pages/Product/components/Color/Color';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/review" element={<Review />} />
        <Route path="/count" element={<Count />} />
        <Route path="/color" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
