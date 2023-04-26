import React, { useEffect, useState } from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {

  // DB
  const [product, setProduct] = useState(null);

  // 변수
  const colors = [`white`, `red`, `yellow`];      // 색상
  const [color, setColor] = useState(colors[0]);  // 색상 변경
  const [buyCount, setBuyCount] = useState(0);        // 가격 카운트
  const totalPrice = product?.price * buyCount;     // 가격 총합

  // 함수
  const changeColor = col => setColor(col); // 색상 변경

  const counter = number => {   // 구매 수량 증가
    if (buyCount === 1 && number === -1) return;
    setBuyCount(buyCount => buyCount + number);
  };

  // 동작
  useEffect(() => {
    fetch(`/data/product.json`)
      .then(res => res.json())
      .then(res => setProduct(res));
  }, []);

  useEffect(() => {
    setBuyCount(product?.count);
  }, [product?.count]);

  // 출력
  return (
    <div className="product">

      {product ?
        <>
          {/* 상품 정보 */}
          < div className="productDetail">

            {/* 상품 이미지 */}
            <div className="productDetailImg">
              <img
                src={`${product.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
                alt={`golf-ball`}
              />
              <ColorButton color={color} changeColor={changeColor} />
            </div>

            {/* 상품 상세 정보 */}
            <div className="productDetailInfo">
              <span className="title">{product.title}</span>
              <span>비거리를 비약적으로 늘려줍니다</span>
              <span>가격 : {product.price.toLocaleString()} 원</span>
              <Color colors={colors} color={color} changeColor={changeColor} />
              <div className="quantity">
                <span> 수량 : </span>
                <Count count={product.count} buyCount={buyCount} setBuyCount={setBuyCount} counter={counter} />
              </div>
              <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
              <button className="buyBtn">구매하기</button>
            </div>

          </div>

          {/* 상품평 */}
          <div className="reviewList">
            <div className="reviewListHeader">
              <span>상품평</span>
            </div>
            <Review review={product.review} />
          </div>
        </>
        :
        `로딩중`
      }

    </div>
  );
};

export default Product;
