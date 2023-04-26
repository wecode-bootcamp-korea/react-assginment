import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/productList.json")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  if (!productList) return;

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList.map((productList) => (
          <div className="listBox">
            <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            <span className="listTitle">{productList.name}</span>
            <span>{`나이 : ${productList.age}살`}</span>
            <span>{`성별 : ${productList.gender}`}</span>
            <span>{`거주지 : ${productList.region}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
