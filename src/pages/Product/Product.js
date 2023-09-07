import React, { useState, useEffect } from "react";
import "./Product.scss";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [review, setReview] = useState("더보기 ▼");
  const price = 300;
  const totalPrice = price * count;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/mockData.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`${data.img}${color}.jpg`} />
          <ColorButton color={color} setColor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{data.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {data.price} 원</span>
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={review} setReview={setReview} />
      </div>
    </div>
  );
};

export default Product;
