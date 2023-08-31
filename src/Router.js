import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login/Login';
// import Product from './pages/Product/Product';
// import ProductList from './pages/ProductList/ProductList';
// import Review from './pages/Review/Review';
// import Conunt from './pages/Conunt/Conunt';
// import Color from './pages/Color/Color';


const Router = () => {
	return (
		<BrowserRouter>                                        
      <Routes>                                             
        <Route path='/' element={<Introduce />} />
        {/* <Route path='/product' element={<Product />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/review' element={<Review />} />
        <Route path='/conunt' element={<Conunt />} />
        <Route path='/color' element={<Color />} />         */}
      </Routes>
    </BrowserRouter>
	);
};

export default Router;