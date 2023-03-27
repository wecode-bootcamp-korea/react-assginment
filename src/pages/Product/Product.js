import React, { useEffect, useState } from "react";
import Color from './components/Color/Color';
import ColorButton from './components/ColorButton/ColorButton';
import Count from './components/Count/Count';
import Review from './components/Review/Review';
import "./Product.scss";


const Product = () => {
  // 컬러값 및 변경을 위한 훅 정의
  const [color, setColor] = useState('white');
  // 카운터 값 및 변경을 위한 훅 정의
  const [count, setCount] = useState(1);

  const [productInfo, setProductInfo] = useState([]);

  console.log(productInfo);

  useEffect(() => {
    fetch('/data/golfBallData.json')
      .then((response) => response.json())
      .then((data) => {
        setProductInfo(data);
      });
      }, [])

  const cost = 300;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${color}.jpg`}// color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          {/* ColorButton 컴포넌트 위치 */}
          <ColorButton color={color} setColor={setColor}/>
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {cost} 원</span>
          {/* Color 컴포넌트 위치 */}
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
            <Count count={count} setCount={setCount} />
          </div>
          <span>최종 가격 : {count*cost} 원</span>
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
