import React, { useState, useEffect } from "react";
import "./ProductList.scss";


const ProductList = () => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    fetch("data/catList.json", {
      method: "GET"
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
        {catList.map((index) => (
          <div key={index.id} className="listBox">
          <img className="listImage" src={index.img} alt="cat_img" />
          <span className="listTitle">{index.name}</span>
          <span>나이: {index.age}</span>
          <span>성별: {index.gender}</span>
          <span>거주지: {index.home}</span>
        </div>
        ))}
      </div>
    </div>
  );
};



export default ProductList;

