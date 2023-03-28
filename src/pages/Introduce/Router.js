import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from "./Introduce";
import Product from "../Product/Product";
import ProductList from "../ProductList/ProductList";
import Review from "../Product/components/Review/Review";
import Count from "../Product/components/Count/Count";
import Color from "../Product/components/Color/Color";
import Nav from "../components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {ROUTER.map((info)=>(<Route key={info.id} path={info.path} element={info.element}></Route>))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const ROUTER = [
  {id: 1, path: "/", element: <Introduce /> },
  {id: 2, path: "/product", element: <Product /> },
  {id: 3, path: "/productList", element: <ProductList /> },
  {id: 4, path: "/review", element: <Review /> },
  {id: 5, path: "/count", element: <Count /> },
  {id: 6, path: "/color", element: <Color /> },
];