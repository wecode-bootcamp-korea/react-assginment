import React from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const ProductInfo = (props) => {
  const totalPrice = props.price * props.count;
  return (
    <div className="productInfo" key={props.id}>
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${props.img}${props.color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={props.color} setColor={props.setColor} />
          {/* ColorButton 컴포넌트 위치 */}
        </div>
        <div className="productDetailInfo">
          <span className="title">{props.title}</span>
          {/* <span>비거리를 비약적으로 늘려줍니다</span> */}
          <span>가격 : {props.price.toLocaleString()} 원</span>
          <Color color={props.color} setColor={props.setColor} />
          {/* Color 컴포넌트 위치 */}
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={props.count} setCount={props.setCount} />
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
        <Review review={props.review} />
        {/* Review 컴포넌트 위치 */}
      </div>
    </div>
  );
};

export default ProductInfo;
