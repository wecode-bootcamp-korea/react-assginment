import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductListPage = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch("/data/catdata.json")
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
      });
  }, []);
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <CatList cats={cats} />
    </div>
  );
};

export default ProductListPage;

export const CatList = (props) => {
  const { cats } = props;

  return (
    <div className="listContainer">
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          name={cat.name}
          age={cat.age}
          gender={cat.gender}
          region={cat.region}
        />
      ))}
    </div>
  );
};

export const CatCard = (props) => {
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
