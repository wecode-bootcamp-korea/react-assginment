import React, { useState, useEffect } from "react";
import ListBox from "../Product/components/ListBox/ListBox";
import "./ProductList.scss";

const ProductList = () => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    fetch("/data/productListData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setCatList(data));
  }, []);

  console.log("ghdsa", catList);
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {catList.map((item) => (
          <ListBox
            key={item.id}
            img={item.img}
            name={item.name}
            age={item.age}
            gender={item.gender}
            residence={item.residence}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
