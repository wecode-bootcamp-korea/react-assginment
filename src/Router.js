import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introdece/Introduce";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Review from "./pages/Product/components/Review/Review";
import Count from "./pages/Product/components/Count/Count";
import Color from "./pages/Product/components/Color/Color";
import Nav from "./pages/components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Count" element={<Count />} />
        <Route path="/Color" element={<Color />} />
        {/* <Route path="*" element={<Error />} /> */}
        {/* path로 가면 element에 있는 컴포넌트를 보여줘 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
