import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Introduce from "./Introduce/Introduce";
import Product from "./pages/Product/Product"
import ProductList from "./pages/ProductList/ProductList";
import Review from "./pages/Product/components/Review/Review";
import Count from "./pages/Product/components/Count/Count";
import Color from "./pages/Product/components/Color/Color";
import ColorButton from "./pages/Product/components/ColorButton/ColorButton";



const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<Introduce/>}/>
            <Route path ="/Product" element = {<Product/>}/>
            <Route path ="/ProductList" element = {<ProductList/>}/>
            <Route path ="/Review" element = {<Review/>}/>
            <Route path ="/Count" element = {<Count/>}/>
            <Route path ="/Color" element = {<Color/>}/>
            <Route path ="/ColorButton" element = {<ColorButton/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;
