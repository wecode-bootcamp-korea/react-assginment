import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/components/Nav/Nav";
import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Review from "./pages/Product/components/Review/Review";
import Count from "./pages/Product/components/Count/Count";
import Color from "./pages/Product/components/Color/Color";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/nav" element={<Nav />}></Route>
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
