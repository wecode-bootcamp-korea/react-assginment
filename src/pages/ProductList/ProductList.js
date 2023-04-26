import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [kitty, setKitty] = useState([]);

  useEffect(() => {
    fetch("/data/kitty.json")
      .then((res) => res.json())
      .then((data) => {
        setKitty(data);
      });
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {kitty.map((kittyInfo) => {
          return (
            <div className="listBox">
              <img
                className="listImage"
                src={`${kittyInfo.img}.jpeg`}
                alt="cat"
              />
              <span className="listTitle">{kittyInfo.name}</span>
              <span>{kittyInfo.age}</span>
              <span>{kittyInfo.sex}</span>
              <span>{kittyInfo.living}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
