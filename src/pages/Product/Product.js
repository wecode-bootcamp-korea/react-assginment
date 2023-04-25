import React, { useEffect, useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [productList, setProductList] = useState([]);
  let price = 300;

  useEffect(() => {
    fetch("/data/productData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);
  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={productList[0] && `${productList[0].img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton className={`colorButton ${color}`} />
        </div>
        <div className="productDetailInfo">
          <span className="title">
            {productList[0] && productList[0].title}
          </span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {productList[0] && productList[0].price} 원</span>
          <Color color={color} setColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          <span>
            최종 가격 : {productList[0] && productList[0].price * count} 원
          </span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review color={color} />
      </div>
    </div>
  );
};

export default Product;
