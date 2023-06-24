import React, { useState, useEffect } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review"
import "./Product.scss";



const Product = () => {
  const [color, setColor] = useState('white');
  const [count, setCount] = useState(1);
  const [showReview, setShowReview] = useState(false);
  const [productData, setProductData] = useState();

  useEffect(()=>{
    fetch("./data/mockData.json")
    .then((response)=>response.json())
    .then((data)=>{
      setProductData(data);
      setColor(data.color);
    });
  }, []);
 

  const changeColor = (color) => {
    setColor(color);
  };
  const colors = ['white', 'red', 'yellow'] 
  const price = 300;


  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${productData.img}${color}.jpg`} 
            alt={`golf-ball`}
          />
        
         <ColorButton color = {color} changeColor = {changeColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color color = {color} changeColor = {changeColor} colors = {colors}  />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          <span>최종 가격 : {(price * count).toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review showreview={showReview} setShowReview={setShowReview} />
      </div>
    </div>
  );
};

export default Product;
