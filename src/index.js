import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Introduce  from "./Introduce/Introduce";
import Review from "./pages/Product/components/Review/Review";
import Count from "./pages/Product/components/Count/Count";
import Color from "./pages/Product/components/Color/Color";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router/>);