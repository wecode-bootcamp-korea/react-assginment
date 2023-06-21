import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("./data/productList.json")
      .then((res) => res.json())
      .then((data) => setItem(data.cat));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {item.map((cat) => (
          <div className="listBox" key={cat.id}>
            <img className="listImage" src={cat.img} alt="cat" />
            <span className="listTitle">{cat.name}</span>
            <span>나이: {cat.age}살</span>
            <span>성별: {cat.gender}</span>
            <span>거주지: {cat.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
