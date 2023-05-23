import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Review from './pages/Product/components/Review/Review';
import Count from './pages/Product/components/Count/Count';
import Color from './pages/Product/components/Color/Color';
import Nav from './pages/components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Introduce />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Nav />
              <Product />
            </>
          }
        />
        <Route
          path="/productList"
          element={
            <>
              <Nav />
              <ProductList />
            </>
          }
        />
        <Route
          path="/review"
          element={
            <>
              <Nav />
              <Review />
            </>
          }
        />
        <Route
          path="/count"
          element={
            <>
              <Nav />
              <Count />
            </>
          }
        />
        <Route
          path="/color"
          element={
            <>
              <Nav />
              <Color />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
