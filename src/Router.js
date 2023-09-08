import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import Color from "./pages/Product/components/Color/Color";
import ColorButton from "./pages/Product/components/ColorButton/ColorButton";
import Nav from "./pages/components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/color" element={<Color />} />
        <Route path="/colorButton" element={<ColorButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
