import React, { useState } from "react";
import Color from "../Product/components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "../Product/components/Count/Count";
import Review from "../Product/components/Review/Review";

import "./Product.scss";

const Product = () => {
  let [nums, setNums] = useState(1);

  const price = 300;
  const totalPrice = price * nums;

  console.log({ nums });

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-white.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />

          <ColorButton />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>

          <Color />

          <div className="quantity">
            <span> 수량 : </span>

            <Count nums={nums} setNums={setNums} />
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
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
