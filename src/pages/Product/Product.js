import React, {useState} from "react";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [color , setColor] =useState("white");
  const [count , setCount] =useState(1);
  const price = 300;
  const totalPrice = price*count;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          {/* {if(props==white) { } } return 밑에서는 if문 사용불가??? */}
        {
        color == "white" ? <img src={`/images/golf-ball-white.jpg`} alt={`golf-ball`}/> 
        :  (color == "red" ?<img src={`/images/golf-ball-red.jpg`}  alt={`golf-ball`}/> 
        :  <img src={`/images/golf-ball-yellow.jpg`}  alt={`golf-ball`}/> )
      }
        
           {/* <img src={`/images/golf-ball-.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          /> */}

          {/* ColorButton 컴포넌트 위치 */}
          {<ColorButton/>}
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          {/* Color 컴포넌트 위치 */}
          {<Color/>}
          <div className="quantity">
            <span> 수량 : </span>
            {/* Count 컴포넌트 위치 */}
            <Count/>
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
        <Review/>
      </div>
    </div>
  );
};

export default Product;
