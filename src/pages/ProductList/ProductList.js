import React, { useEffect } from "react";
import { useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data/newMockData.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {data?.map((info) => {
          return (
            <div className="listBox" key={info.id}>
              <img className="listImage" src="/images/cat.jpeg" alt="cat" />
              <span className="listTitle">{info.name}</span>
              <span>나이 : {info.age}</span>
              <span>성별 : {info.gender}</span>
              <span>거주지 : {info.home}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
