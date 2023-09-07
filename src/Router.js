import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import Color from "./pages/Product/components/Color/Color";
import Count from "./pages/Product/components/Count/Count";
import Review from "./pages/Product/components/Review/Review";
import ColorButton from "./pages/Product/components/Color/ColorButton/ColorButton";
import Nav from "./pages/components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/" element={<Product />} />
        <Route path="/color" element={<Color />} />
        <Route path="/count" element={<Count />} />
        <Route path="/review" element={<Review />} />
        <Route path="/colorbutton" element={<ColorButton />} />
        <Route path="*" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
