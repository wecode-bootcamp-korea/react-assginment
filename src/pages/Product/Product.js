import React, { useState } from "react";
import "./Product.scss";
// import { Link } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import ColorButton from "./components/ColorButton/ColorButton";
import Review from "./components/Review/Review";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";

const Product = () => {
  const price = 300;
  const totalPrice = price;
  const [countNumber, setCount] = useState(1);
  const navigate = useNavigate();
  const [textColor, setTextColor] = useState("white");
  const colors = ["white", "red", "yellow"];

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${textColor}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          {/* ColorButton 컴포넌트 위치 */}
          <ColorButton textColor={textColor} setTextColor={setTextColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          {/* Color 컴포넌트 위치 */}
          <Color
            textColor={textColor}
            setTextColor={setTextColor}
            colors={colors}
          />
          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
            <Count countNumber={countNumber} setCount={setCount} />
          </div>
          <span>
            최종 가격 : {totalPrice.toLocaleString() * countNumber} 원
          </span>
          <Link to="/ProductList">
            <button
              className="buyBtn"
              onClick={() => {
                navigate("/poductList");
              }}
            >
              구매하기
            </button>
          </Link>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {/* Review 컴포넌트 위치 */}
        <Review />
      </div>
    </div>
  );
};

export default Product;
