import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './pages/components/Nav/Nav'
import Introduce from "./pages/Introduce/Introduce"
import Product from "./pages/Product/Product"
import ProductList from "./pages/ProductList/ProductList"
import Review from "./pages/Product/components/Review/Review"
import Count from "./pages/Product/components/Count/Count"
import Color from "./pages/Product/components/Color/Color"

const Router = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/review" element={<Review />} />
        <Route path="/count" element={<Count />} />
        <Route path="/color" element={<Color />} />
        <Route path="*" element={<Nothing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

const Nothing = () => {
  return <h1>Nothing</h1>
}