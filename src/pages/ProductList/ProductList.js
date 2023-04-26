import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [data, setData] = useState();

  useEffect(() =>
  fetch('/data/userData.json', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    setData(data);
  }),[]);

  if(!data) return

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {data.map((data) => {
          return (
            <div className="listBox">
            <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            <span className="listTitle">{data.name}</span>
            <span>나이 : {data.age}살</span>
            <span>성별 : {data.gender}</span>
            <span>거주지 : {data.hometown}</span>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default ProductList;
