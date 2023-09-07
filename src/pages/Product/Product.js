import React, { useState, useEffect } from "react";
import "./Product.scss";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
  const [inf, setInf] = useState("");
  const [moreBox, setMoreBox] = useState("none");
  const [moreBtn, setMoreBtn] = useState("open");

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json()) //읽어온 데이터를 json으로 변환
      .then((json) => {
        setInf(json);
      });
  }, []);

  // const price = 300;
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const totalPrice = inf.price * count;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${inf.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          {/* ColorButton 컴포넌트 위치 */}
          <ColorButton color={color} />
        </div>
        <div className="productDetailInfo">
          <span className="title">{inf.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {inf ? inf.price.toLocaleString() : inf.price} 원</span>

          <Color color={color} changeColor={setColor} />
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={count} setCount={setCount} />
          </div>
          <span>
            최종 가격 :{console.log(inf.price)}
            {console.log(totalPrice)}
            {totalPrice.toLocaleString()} 원
          </span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        {/* Review 컴포넌트 위치 */}
        <Review
          moreBox={moreBox}
          setMoreBox={setMoreBox}
          moreBtn={moreBtn}
          setMoreBtn={setMoreBtn}
          review={inf.review}
        ></Review>
      </div>
    </div>
  );
};

export default Product;
