import React from "react";
import ReactDOM from "react-dom/client";
import Router from './Router';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
