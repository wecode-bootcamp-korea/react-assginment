import React, { useEffect, useState } from "react";
import Count from "./components/Count/Count";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Review from "./components/Review/Review";
import "./Product.scss";


const Product = () => {

  // const price = 300;
  // const totalPrice = price;

    // const [productData, setProductData] = useState();
   //json의 경로를 설정,
   //.then메소드를 두번 작성

   //첫번째 .then메소드에 인자로 콜백을 전달하고, 매개변수 response에 json형태로 데이터가 들어옴
   //body에 .json()메서드가 json형태를 자바스크립트 형태로 변환하고, 반환해 준다.

   //두번째 .then에서는 인자로 콜백을 전달하고,
   //매개변수에는 첫번째 .then에서 변환된 객체를 result로 받아 setState함수로 result를 state에 저장한다.
   //state에 mock데이터를 저장하고, 언제든 꺼내 쓸 수 있음

   const [colorName, setColorName] = useState('white');
   const [num, setNum] = useState(1);
   const [ getData, setGetData ] = useState([]);

   useEffect(() => {
    fetch("/data/product.json")
      .then(response => response.json())
      .then(result => setGetData(result));
    },[])

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${getData.product_img}${colorName}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <ColorButton></ColorButton>
        </div>
        <div className="productDetailInfo">
          <span className="title">{getData.product_name}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {getData.price} 원</span>
          <Color colorName={colorName} setColorName={setColorName}></Color>
          <div className="quantity">
            <span> 수량 : {getData.price}</span>
            <Count num={num} setNum={setNum} ></Count>
          </div>
          <span>최종 가격 : {getData.price*num} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review></Review>
      </div>
    </div>
  );
};

export default Product;
