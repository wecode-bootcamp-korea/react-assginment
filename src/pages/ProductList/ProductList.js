import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    fetch("/data/productListData.json")
      .then((res) => res.json())
      .then((data) => setCatInfo(data));
  }, []);
  console.log(catInfo); //초기값 찍히는거 질문하기 , console찍는위치

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {catInfo.map((info) => (
          <div className="listBox" key={info.id}>
            <img className="listImage" src={info.img} alt="cat" />
            <span className="listTitle">{info.name}</span>
            <span>나이 : {info.age}</span>
            <span>성별 : {info.gender}</span>
            <span>거주지 : {info.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
