import React, { useEffect, useState } from "react";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import "./Product.scss";

const Product = () => {
  //const price = 300;
  const[totalPrice, setTotalPrice] = useState(300);
  const[review, setReview] = useState(false); //'review' is assigned a value but never used
  const[color, setColor] = useState("white");
  const[count, setCount] = useState(1); //'count' is assigned a value but never used 

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('/data/mockData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
     setDatas(data);
    })
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
        <img
          src={datas.img + `${color}.jpg`}
          alt={`golf-ball`}
        />
          {/* ColorButton 컴포넌트 위치 */}
        <ColorButton color={color} setColor={setColor}/>
        </div>
        <div className="productDetailInfo">
          <span className="title">{datas.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {datas.price?.toLocaleString()} 원</span>

          {/* Color 컴포넌트 위치 */}
        <Color color={color} setColor={setColor} ></Color>

          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
        <Count count={datas.count} // datas.을 안붙여도 화면에 렌더링된다?
        setCount={setCount}
        setTotalPrice ={setTotalPrice}
        price = {datas.price}
        totalPrice = {totalPrice}/>

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
      <Review review = {datas.review} setReview = {setReview} />
      </div>
    </div>
  );
};

export default Product;
