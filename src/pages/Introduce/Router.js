import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from "./Introduce";
import Product from "../Product/Product";
import ProductList from "../ProductList/ProductList";
import Review from "../Product/components/Review/Review";
import Count from "../Product/components/Count/Count";
import Color from "../Product/components/Color/Color";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/productList" element={<ProductList />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/count" element={<Count />}></Route>
        <Route path="/color" element={<Color />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;