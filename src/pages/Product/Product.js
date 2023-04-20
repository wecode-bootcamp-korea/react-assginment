import React, {useState} from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
  const [img, setImg] = useState('/images/golf-ball-white.jpg')
  const [change, setChange] = useState('selected');
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(300);
  const [pre, setPre] = useState('colorButton white');

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={img} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
        <ColorButton className={pre}  />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : 300 원</span>
          <Color img={setImg} change={setChange} change1={change} setPre={setPre}/>
          <div className="quantity">
            <span> 수량 : </span>
            <Count count={setCount} quantity={count} price={setPrice}/>
          </div>
          <span>최종 가격 : {price} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default Product;
