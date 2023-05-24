import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productLiTwo, setProductLiTwo] = useState([]);

  useEffect(() => {
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((data) => setProductLiTwo(data));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productLiTwo.map((catLine) => {
          return (
            <div className="listBox" key={catLine.id}>
              <img className="listImage" src="/images/cat.jpeg" alt="cat" />
              <span className="listTitle">{catLine.name}</span>
              <span>나이 : {catLine.age}</span>
              <span>성별 : {catLine.gender}</span>
              <span>거주지 : {catLine.residence}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
