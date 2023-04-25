import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [catInfo, setCatInfo] = useState([]);
  useEffect(() => {
    fetch("/data/catdata.json")
      .then((res) => res.json())
      .then((data) => {
        setCatInfo(data);
      });
  }, []);
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {catInfo.length !== 0 &&
          catInfo.map((cat) => (
            <CatLists
              key={cat.id}
              name={cat.name}
              age={cat.age}
              gender={cat.gender}
              region={cat.region}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;

export const CatLists = (props) => {
  const { name, age, gender, region } = props;
  return (
    <div className="listBox">
      <img className="listImage" src="/images/cat.jpeg" alt="cat" />
      <span className="listTitle">{name}</span>
      <span>{`나이 : ${age}살`}</span>
      <span>{`성별 : ${gender}`}</span>
      <span>{`거주지 : ${region}`}</span>
    </div>
  );
};
