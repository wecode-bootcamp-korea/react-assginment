// Router.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "../src/pages/Introduce/Introduce";
// import Components from "../src/pages/components/Nav/Nav";
import Color from "../src/pages/Product/components/Color/Color";
import Count from "../src/pages/Product/components/Count/Count";
import Review from "../src/pages/Product/components/Review/Review";
import Product from "../src/pages/Product/Product";
import ProductList from "../src/pages/ProductList/ProductList";
import Nav from "./pages/components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/review" element={<Review />} />
        <Route path="/count" element={<Count />} />
        <Route path="/color" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
