import React, { useState, useEffect } from 'react';
import './ProductList.scss';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mockData-cats.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {productList.map(product => {
          return (
            <div className="listBox" key={product.id}>
              <img className="listImage" src={product.img} alt="cat" />
              <span className="listTitle">{product.name}</span>
              <span>나이 : {product.age}</span>
              <span>성별 : {product.sex}</span>
              <span>거주지 : {product.location}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
