import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Review from './pages/Product/components/Review/Review';
import Conunt from './pages/Product/components/Count/Count';
import Color from './pages/Product/components/Color/Color';
import ColorButton from './pages/Product/components/ColorButton/ColorButton';


const Router = () => {
	return (
		<BrowserRouter>                                  
        <Routes>                                             
          <Route path='/' element={<Introduce />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/review' element={<Review />} />
          <Route path='/conunt' element={<Conunt />} />
          <Route path='/color' element={<Color />} />
          <Route path='/colorButton' element={<ColorButton />} />
      </Routes>
    </BrowserRouter>
	);
};

export default Router;