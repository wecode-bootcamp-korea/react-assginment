import React, { useState, useEffect } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});

  const totalPrice = product ? product.price * count : 0;

  useEffect(() => {
    fetch("/data/productData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  // if (!product) return;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${product.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={color} setColor={setColor} />
          {/* ColorButton 컴포넌트 위치 */}
        </div>
        <div className="productDetailInfo">
          <span className="title">{product.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {product.price?.toLocaleString()} 원</span>
          <Color color={color} setColor={setColor} />
          {/* Color 컴포넌트 위치 */}
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
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
        <Review review={product.review} />
        {/* Review 컴포넌트 위치 */}
      </div>
    </div>
  );
};

export default Product;
