import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/components/Nav/Nav";
import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import Color from "./pages/Product/components/Color/Color";
import Count from "./pages/Product/components/Count/Count";
import Review from "./pages/Product/components/Review/Review";
import ColorButton from "./pages/Product/components/ColorButton/ColorButton";
import ProductList from "./pages/ProductList/ProductList";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/product" element={<Product />} />
        <Route path="/color" element={<Color />} />
        <Route path="/colorButton" element={<ColorButton />} />
        <Route path="/count" element={<Count />} />
        <Route path="/review" element={<Review />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
