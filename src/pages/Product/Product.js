import React, { useEffect, useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [colorName, setColorName] = useState("white");
  const [countNumber, setCountNumber] = useState(1);
  const [productData, setProductData] = useState({});
  const price = productData.price;
  const totalPrice = (price * countNumber).toLocaleString();

  useEffect(() => {
    fetch("/data/productData.json")
      .then((res) => res.json())
      .then((result) => setProductData(result));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${productData.img}${colorName}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton colorName={colorName} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productData.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price} 원</span>
          <Color colorName={colorName} setColorName={setColorName} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count countNumber={countNumber} setCountNumber={setCountNumber} />
          </div>
          <span>최종 가격 : {totalPrice} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review={productData.review} />
      </div>
    </div>
  );
};

export default Product;
