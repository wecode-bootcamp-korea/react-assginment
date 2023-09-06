import React from "react";
import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Review from "./pages/Product/components/Review/Review";
import Count from "./pages/Product/components/Count/Count";
import Color from "./pages/Product/components/Color/Color";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./pages/components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <div className="router"> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/review" element={<Review />} />
        <Route path="/count" element={<Count />} />
        <Route path="/color" element={<Color />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default Router;
