import React, { useState, useEffect } from "react";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import ColorButton from "./components/ColorButton/ColorButton";
import "./Product.scss";

const Product = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [count, setCount] = useState(null);
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setCount(data.count);
        setPrice(data.price);
      });
  }, []);
  console.log(product);

  useEffect(() => {
    if (count !== null && price !== null) {
      setTotalPrice(count * price);
    }
  }, [count, price]);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${product.img}${selectedColor}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton color={selectedColor} />
          {/* ColorButton 컴포넌트 위치 */}
        </div>
        <div className="productDetailInfo">
          <span className="title">{product.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price && price.toLocaleString()}원</span>
          <Color selectedColor={selectedColor} changeColor={setSelectedColor} />
          {/* Color 컴포넌트 위치 */}
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
            {/* Count 컴포넌트 위치 */}
          </div>
          <span>최종 가격 : {totalPrice && totalPrice.toLocaleString()}원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {/* Review 컴포넌트 위치 */}
        <Review review={product.review} />
      </div>
    </div>
  );
};

export default Product;
