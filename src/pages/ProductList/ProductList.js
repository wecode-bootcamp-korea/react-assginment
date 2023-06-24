import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [catList,  setCatList] = useState([]);

  useEffect(()=>{
    fetch("./data/catData.json")
    .then((response) => response.json())
    .then((data) => setCatList(data));
  }, [])
  
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
      {catList.map((cat) => (
          <div className="listBox" key={cat.id}>
            <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            <span className="listTitle">{cat.name}</span>
            <span>나이: {cat.age}살</span>
            <span>성별: {cat.sex}</span>
            <span>거주지: {cat.adress}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
