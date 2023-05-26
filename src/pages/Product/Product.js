import React, { useState, useEffect } from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [click, setClick] = useState("더보기 ▼");
  const [number, setNumber] = useState(1);
  const [color, setColor] = useState("white");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            className="productDetailImgthis"
            src={`${productList.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productList.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {productList.price} 원</span>
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count number={number} setNumber={setNumber} />
          </div>
          <span>최종 가격 : {productList.price * number} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review
          click={click}
          setClick={setClick}
          reviewName={productList.review}
        />
      </div>
    </div>
  );
};

export default Product;
