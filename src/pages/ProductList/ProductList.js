import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    fetch("data/productlist.json", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setProductList(data.list));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList?.map((product) => (
          <div key={product.id} className="listBox">
            <img className="listImage" src={product.img} alt="cat" />
            <span className="listTitle">{product.name}</span>
            <span>나이 : {product.age}</span>
            <span>성별 : {product.gender}</span>
            <span>거주지 : {product.address}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
