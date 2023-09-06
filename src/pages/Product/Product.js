import React, { useEffect, useState } from "react";
import "./Product.scss";
import Color from "../Product/components/Color/Color";
import Count from "../Product/components/Count/Count";
import Review from "../Product/components/Review/Review";
import ColorButton from "../Product/components/ColorButton/ColorButton";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [isHidden, setIsHidden] = useState(true);
  const [productMockData, setProductMockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/productMockData.json")
      .then((res) => res.json())
      .then((data) => setProductMockData(data));
  }, []);

  const reviewHiddenHandler = () => {
    setIsHidden(!isHidden);
  };

  const price = 300;
  const totalPrice = price * count;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${productMockData[0]?.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={color} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productMockData[0]?.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {productMockData[0]?.price.toLocaleString()} 원</span>
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
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
        <Review
          isHidden={isHidden}
          setIsHidden={reviewHiddenHandler}
          productMockData={productMockData[0]?.review}
        />
      </div>
    </div>
  );
};

export default Product;
