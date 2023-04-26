import React, { useState, useEffect } from "react";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import ColorButton from "./components/ColorButton/ColorButton";
import "./Product.scss";

const Product = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("white");
  const [product, setProduct] = useState({});

  //count용 함수
  const decrease = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch("/data/productInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img src={`${product.img}${color}.jpg`} alt={`golf-ball-${color}`} />
          <ColorButton color={color} setcolor={setColor} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{product.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {product.price?.toLocaleString()} 원</span>
          <Color color={color} setcolor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count
              count={count}
              decrease={decrease}
              increase={increase}
              setcount={setCount}
            />
          </div>
          <span>최종 가격 : {(product.price * count).toLocaleString()} 원</span>
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
};

export default Product;
