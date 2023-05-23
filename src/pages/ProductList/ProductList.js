import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    fetch("/data/productListData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCatList(data);
      });
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {catList.length &&
          catList.map((cat) => {
            return (
              <div className="listBox">
                <img className="listImage" src="/images/cat.jpeg" alt="cat" />
                <span className="listTitle">{cat.name}</span>
                <span>나이 : {cat.age}</span>
                <span>성별 : {cat.gender}</span>
                <span>거주지 : {cat.resident}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
