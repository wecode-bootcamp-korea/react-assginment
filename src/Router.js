import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce'
import Product from './pages/Product/Product';
import Color from './pages/Product/components/Color/Color';
import Count from './pages/Product/components/Count/Count';
import Review from './pages/Product/components/Review/Review';
import ColorButton from './pages/Product/components/ColorButton/ColorButton';
import Nav from './pages/components/Nav/Nav';
import NewBox from './pages/Introduce/NewBox';
import ProductList from './pages/ProductList/ProductList';

  const Router = () => {
    return (
      <BrowserRouter>
        <Nav />                           
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Color" element={<Color />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/Count" element={<Count />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/ColorButton" element={<ColorButton />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/NewBox" element={<NewBox />} />
        </Routes>     
      </BrowserRouter>
    )};


    export default Router;

    const NotFound = () => {
      return <div>페이지를 찾을 수 없습니다.</div>
    }