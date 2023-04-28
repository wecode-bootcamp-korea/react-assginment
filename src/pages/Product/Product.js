import React from "react";
import "./Product.scss";

const Product = () => {
  const price = 300;
  const totalPrice = price;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`} 
          />
          {/* ColorButton 컴포넌트 위치 */}
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          {/* Color 컴포넌트 위치 */}
          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {/* Review 컴포넌트 위치 */}
      </div>
    </div>
  );
};

export default Product;
