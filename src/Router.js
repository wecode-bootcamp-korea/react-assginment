import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Introduce from "./Introduce/Introduce";
import Product from "./pages/Product/Product"
import ProductList from "./pages/ProductList/ProductList";


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<Introduce/>}/>
            <Route path ="/Product" element = {<Product/>}/>
            <Route path ="/ProductList" element = {<Introduce/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;