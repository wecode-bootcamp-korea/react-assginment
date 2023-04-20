import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce'
import Product from './pages/Product/Product';
import Color from './pages/Product/components/Color/Color';

  const Router = () => {
    return (
      <BrowserRouter>
                                       
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Color" element={<Color />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
                                      
      </BrowserRouter>
    );
    }


    export default Router;

    const NotFound = () => {
      return <div>페이지를 찾을 수 없습니다.</div>
    }