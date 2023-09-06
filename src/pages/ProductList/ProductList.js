import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {

  const [catData , setCatData] = useState([{}]);

  useEffect(() => {
    fetch('/data/CatData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setCatData(data)
      });
  },[])

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {/* <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고양이</span>
          <span>나이 : 4살</span>
          <span>성별 : male</span>
          <span>거주지 : 춘천</span>
        </div> */}
        {catData.map((data)=> <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">{data.name}</span>
          <span>나이 : {data.old}살</span>
          <span>성별 : {data.sex}</span>
          <span>거주지 : {data.loc}</span>
        </div>)}
      </div>
    </div>
  );
};

export default ProductList;
