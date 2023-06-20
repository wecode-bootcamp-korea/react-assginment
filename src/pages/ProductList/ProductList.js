import { useEffect, useState } from "react";
import React from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("/Data/mock.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {datas.map((data) => {
          return (
            <div className="listBox" key={data.id}>
              <img className="listImage" src="/images/cat.jpeg" alt="cat" />
              <span className="listTitle">{data.name}</span>
              <span>나이 : {data.age}</span>
              <span>성별 : {data.sex}</span>
              <span>거주지 : {data.adress}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
