import React, { useEffect, useState } from "react";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";
import "./components/Color/Color.scss";
import ColorButton from "./components/ColorButton/ColorButton";
// import mockData from "../../../public/Data/data.json";

const Product = () => {
  const [number, setNumber] = useState(1);
  const colors = ["white", "red", "yellow"];
  const [color, setColor] = useState("white");
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  }, []);

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${data.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          {console.log()}
          <div className="colorBtn">
            <ColorButton color={color} />
          </div>
        </div>
        <div className="productDetailInfo">
          <span className="title">{data.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {data?.price?.toLocaleString()} 원</span>
          <Color colors={colors} color={color} changeColor={changeColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count number={number} setNumber={setNumber} />
          </div>
          <span>최종 가격 : {(number * data?.price).toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={data.review} />
      </div>
    </div>
  );
};

export default Product;
