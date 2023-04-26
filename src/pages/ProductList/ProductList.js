import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    fetch("/data/catInfo.json")
      .then((response) => response.json())
      .then((data) => {
        setCatList(data);
      });
  }, []);

  console.log("catList ", catList);
  // 왜 맨 처음에 빈배열이 찍히는데, 렌더링 상에는 에러가 발생하지 않지???

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {catList.map((cat) => {
          return (
            <div key={cat.id} className="listBox">
              <img className="listImage" alt="cat" src={cat.img} />
              <span className="listTitle">{cat.name}</span>
              <span>나이 : {cat.age}살</span>
              <span>성별 : {cat.gender}</span>
              <span>거주지 : {cat.city}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
