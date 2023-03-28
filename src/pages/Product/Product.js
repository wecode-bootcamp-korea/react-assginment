import React, { useState, useEffect } from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = (props) => {
  //console.log(productList);
  useEffect(() => {
    fetch("/data/product.json")
      .then((response) => response.json())
      .then((result) => setProductList(result));
  }, []);
  const [productList, setProductList] = useState([]);
  const [num, setNum] = useState(1);
  const [colorName, setColorName] = useState("white");

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${productList.image}${colorName}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productList.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {productList.price} 원</span>
          <Color colorName={colorName} setColorName={setColorName} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count num={num} setNum={setNum} />
          </div>
          <span>최종 가격 : {productList.price * num} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>{productList.commet}</span>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default Product;
