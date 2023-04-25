import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce';     
import Product from './pages/Product/Product';               
import Color from './pages/Product/components/Color/Color'; 
import Count from './pages/Product/components/Count/Count';

const Router = () => {
  return (
    <BrowserRouter>                                                              
      <Routes>                                                         
        <Route path='/' element={<Introduce />} />
        <Route path='/product'element={<Product />} />
        <Route path='/color'element={<Color />} />
        <Route path='/count' element={<Count/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;