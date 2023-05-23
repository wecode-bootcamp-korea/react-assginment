import React, { useState, useEffect } from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [productList, setProductList] = useState([]);

  const price = 300;
  const totalPrice = price * count;

  useEffect(() => {
    fetch("/data/productData.json")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  return (
    productList.length &&
    productList.map((product) => {
      return (
        <div className="product" key={product.id}>
          <div className="productDetail">
            <div className="productDetailImg">
              <img src={`/images/golf-ball-${color}.jpg`} alt={`golf-ball`} />
              <ColorButton color={color} setColor={setColor} />
            </div>
            <div className="productDetailInfo">
              <span className="title">{product.title}</span>
              <span>비거리를 비약적으로 늘려줍니다</span>
              <span>가격 : {price.toLocaleString()} 원</span>
              <Color color={color} setColor={setColor} />
              <div className="quantity">
                <span> 수량 : </span>
                <Count count={count} onChange={setCount} />
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
          </div>
        </div>
      );
    })
  );
};

export default Product;
