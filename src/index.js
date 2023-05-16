import React from "react";
import ReactDOM from "react-dom/client";
import Introduce from './pages/Introduce/Introduce';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Review from './pages/Product/components/Review/Review';
import Count from './pages/Product/components/Count/Count';
import Color from './pages/Product/components/Color/Color';


import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);