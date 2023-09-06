import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/productListMockData.json")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList?.map((list) => {
          return (
            <div className="listBox" key={list.id}>
              <img className="listImage" src={list.img} alt="cat" />
              <span className="listTitle">{list.name}</span>
              <span>나이 : {list.age}</span>
              <span>성별 : {list.gender}</span>
              <span>거주지 : {list.residence}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
