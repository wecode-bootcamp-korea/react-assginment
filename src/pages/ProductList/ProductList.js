import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productListArr, setProductListArr] = useState([]);
  useEffect(() => {
    fetch("/data/productListData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductListArr(data);
      });
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productListArr.map((info) => {
          return (
            <div key={info.id} className="listBox">
              <img className="listImage" src="/images/cat.jpeg" alt="cat" />
              <span className="listTitle">{info.name}</span>
              <span>나이 : {info.age}살</span>
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
