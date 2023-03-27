import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/catData.json')
      .then((response) => response.json())
      .then(data => setData(data));
  }, [])
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {data.map((cat) => (
          <div key={cat.id} className="listBox">
            <img className="listImage" src={cat.imgUrl} alt="cat" />
            <span className="listTitle">{cat.name}</span>
            <span>나이 : {cat.age}살</span>
            <span>성별 : {cat.gender}</span>
          <span>거주지 : {cat.address}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
