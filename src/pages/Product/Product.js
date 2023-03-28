import React, { useState, useEffect } from "react";
import Color from "../Product/components/Color/Color";
import Count from "../Product/components/Count/Count";
import Review from "./components/Review/Review";
// import Nav from "../components/Nav/Nav";
import "./Product.scss";

const Product = () => {
  const [countChange, setCountChange] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [colorName, setColorName] = useState("white");
  const [colorChange, setColorChange] = useState("white");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/datadata.json")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  const totalPrice = (price) => {
    return (price *= countChange);
  };

  function checkColor(imgcolor) {
    if (imgcolor === "white") {
      return productList.productImage + `${imgcolor}` + ".jpg";
    } else if (imgcolor === "red") {
      return productList.productImage + `${imgcolor}` + ".jpg";
    } else {
      return productList.productImage + `${imgcolor}` + ".jpg";
    }
  }

  const circleColor = (color) => {
    if (color === "white") {
      return "white";
    } else if (color === "red") {
      return "red";
    } else {
      return "yellow";
    }
  };

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={checkColor(colorName)} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <button
            className="productColorSymbol"
            style={{ backgroundColor: circleColor(colorChange) }}
          ></button>
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>{productList.productTitle}</span>
          <span>가격 : {productList.productPrice} 원</span>

          <Color
            colorName={colorName}
            setColorName={setColorName}
            colorChange={colorChange}
            setColorChange={setColorChange}
          />

          <div className="quantity">
            <span> 수량 : </span>

            <Count countChange={countChange} setCountChange={setCountChange} />
          </div>
          <span>최종 가격 : {totalPrice(productList.productPrice)} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review productReview={productList.productReview} />
      </div>
    </div>
  );
};

export default Product;
