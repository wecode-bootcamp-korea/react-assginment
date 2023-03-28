import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [catList, setcatlist] = useState(0);

  useEffect(() => {
    fetch('/data/productList.json')
      .then((response) => response.json())
      .then((result) => setcatlist(result));
  }, []);

  console.log(catList);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {catList &&
          catList.map((cat, index) => {
            return (
              <div className="listBox" key={index}>
                <img className="listImage" src={cat.image} alt="cat" />
                <span className="listTitle">{cat.name}</span>
                <span>나이 : {cat.age}</span>
                <span>성별 : {cat.gender}</span>
                <span>거주지 : {cat.abode}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
