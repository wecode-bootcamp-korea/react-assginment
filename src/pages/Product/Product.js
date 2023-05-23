import React, { useEffect, useState } from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Review from "./components/Review/Review";
import Count from "./components/Count/Count";
import Color from "./components/Color/Color";
// import mockDato from "/mockData.json";

import "./Product.scss";

const Product = () => {
  let [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const price = 300;
  const totalPrice = price * count;
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/mockData.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={data.img} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton
            className={`colorButton ${color}`}
            color={color}
            setColor={setColor}
          />
        </div>
        <div className="productDetailInfo">
          <span className="title">{data.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {data.price} 원</span>
          <Color setColor={setColor} color={color} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          <span>최종 가격 : {data.price * count} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default Product;
