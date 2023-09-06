import React, {useState} from "react";
import "./Product.scss";
import Color from "./components/Color/Color";
import ColorButton from "./components/Color/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {

  const [countNum, setCountNum] = useState(1);
  const [color, setColor] = useState('white');

  const colorChangeHandler=(selectedColor)=>{
    setColor(selectedColor);
  }

  const plusHandler=()=>{
    setCountNum(countNum+1);
  };

  const minusHandler=()=>{
    setCountNum(countNum-1);
  }

  const resetHandler=()=>{
    setCountNum(1);
  }

  const price = 300;
  const totalPrice = price * countNum;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball-${color}`}
          />
          {/* ColorButton 컴포넌트 위치 */}
          <ColorButton
            selectColor={color}
            handleClick={colorChangeHandler}
            />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price} 원</span>
          {/* Color 컴포넌트 위치 */}

          <Color
            color={color}
            colorChangeHandler={colorChangeHandler}
            />

          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
            <Count countNum={countNum} plusHandler={plusHandler} minusHandler={minusHandler} resetHandler={resetHandler}/>
          </div>
          <span>최종 가격 : {totalPrice} 원</span>
          <button className="buyBtn">구매하기</button>
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
