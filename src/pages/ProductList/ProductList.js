import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("/data/productList.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch(console.log("fail"));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList.map((infor) => {
          return <ListBox infor={infor} key={infor.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;

const ListBox = ({ infor }) => {
  return (
    <div className="listBox">
      <img className="listImage" src="/images/cat.jpeg" alt="cat" />
      <span className="listTitle">{infor.name}</span>
      <span>나이 : {infor.age}살</span>
      <span>성별 : {infor.gender}</span>
      <span>거주지 : {infor.residence}</span>
    </div>
  );
};
