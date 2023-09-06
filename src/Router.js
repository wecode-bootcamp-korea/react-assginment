import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import Color from "./pages/Product/components/Color/Color";
import Count from "./pages/Product/components/Count/Count";
import Review from "./pages/Product/components/Review/Review";
import Nav from "./pages/components/Nav/Nav";
import ProductList from "./pages/ProductList/ProductList";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/product" element={<Product />} />
          <Route path="/color" element={<Color />} />
          <Route path="/count" element={<Count />} />
          <Route path="/review" element={<Review />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
