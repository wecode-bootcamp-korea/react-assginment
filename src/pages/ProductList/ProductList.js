import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/productListData.json")
      .then((res) => res.json())
      .then((result) => setProductList(result));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList.map((product) => (
          <div className="listBox" key={product.id}>
            <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            <span className="listTitle">{product.name}</span>
            <span>나이 : {product.age}살</span>
            <span>성별 : {product.gender}</span>
            <span>거주지 : {product.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
