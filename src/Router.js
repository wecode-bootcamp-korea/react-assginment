import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
// import Review from "./pages/Review/Review";
// import Count from "./pages/Count/Count";
// import Color from "./pages/Color/Color";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
        {/* <Route path="/review" element={<Review />} />
        <Route path="/count" element={<Count />} />
        <Route path="/color" element={<Color />} /> */}
        <Route path="*" element={<div>해당 주소는 없는 페이지입니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
