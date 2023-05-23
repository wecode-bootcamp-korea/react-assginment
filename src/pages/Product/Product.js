import React, { useEffect, useState } from "react";
import "./Product.scss";
import Color from "./components/Color/Color";
import Colorbutton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
  const [color, setColor] = useState("");
  const [count, setCount] = useState(1);
  const [productInfo, setProductInfo] = useState([]);
  const price = 300;
  const totalPrice = price * count;

  useEffect(() => {
    fetch("/data/productInfoList.json",{method:'GET'})
      .then(res => res.json())
      .then(data => {
        setProductInfo(...data);
        console.log(productInfo);
      })
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`${productInfo.img}${color}.jpg`} alt={`golf-ball`} />
          <Colorbutton setColor={setColor} color={color} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{productInfo.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {productInfo.price} 원</span>
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
        <Review productInfo={productInfo}/>
      </div>
    </div>
  );
};

export default Product;
