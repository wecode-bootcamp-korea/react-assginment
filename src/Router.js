import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce/Introduce";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Review from "./pages/Product/components/Review/Review";
import Count from "./pages/Product/components/Count/Count";
import Color from "./pages/Product/components/Color/Color";
import ColorButton from "./pages/Product/components/ColorButton/ColorButton"
import Nav from "./pages/components/Nav/Nav";

const NavLink = [
    { path: 'white', element : `${<Introduce />}`},
    { path: '/product', element : `${<Product />}`}, 
    { path: '/productList', element : `${<ProductList />}`},
    { path: '/review', element : `${<Review />}` },
    { path: '/count', element : `${<Count />}` },
    { path: '/color', element : `${<Color />}`},
    { path: "/colorbutton", element : `${<ColorButton />}` }
    ]

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                {
                NavLink.map((nav) => {
                    return (
                        <Route path="{nav.path}" element="{nav.element}" />
                    )
                })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router;