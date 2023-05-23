import React, { useEffect, useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [productInfo, setProductInfo] = useState([]);

  const price = parseInt(productInfo.price);
  const totalPrice = price * count;

  useEffect(() => {
    fetch("/data/productData.json")
      .then((res) => res.json())
      .then((data) => setProductInfo(...data));
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${productInfo.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball-${color}`}
          />
          {/* ColorButton 컴포넌트 위치 */}
          <ColorButton color={color} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productInfo.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          {/* Color 컴포넌트 위치 */}
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
            <Count count={count} setCount={setCount} />
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
        <Review productInfo={productInfo} />
      </div>
    </div>
  );
};

export default Product;
