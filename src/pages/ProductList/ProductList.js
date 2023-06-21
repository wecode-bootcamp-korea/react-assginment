import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    fetch("./data/productListData.json")
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);
  return (
    // {setCat.map(()=>{})}
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {cats.map((info) => (
          <div className="listBox" key={info.id}>
            <img className="listImage" src={info.img} alt="cat" />
            <span className="listTitle">{info.name}</span>
            <span>나이 : {info.age}살</span>
            <span>성별 : male</span>
            <span>거주지 : {info.address}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
