import React, { useEffect, useState } from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch("/data/productData.json", {
  //     method : "GET",
  //     headers : {
  //       "Content-Type" : "application/json"
  //     },
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {setProduct(data)})
  // }, [])

  useEffect(() => {
    fetch("/data/ProductData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const price = product[0].price;
  const totalPrice = price * count;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${product[0].img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          {/* ColorButton 컴포넌트 위치 */}
          <ColorButton color={color} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{product[0].title}</span>
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
        <Review product={product} />
      </div>
    </div>
  );
};

export default Product;
