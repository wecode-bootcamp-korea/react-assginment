import React, {useState} from "react";
import ColorButton from "../Product/components/ColorButton/ColorButton"
import Color from "../Product/components/Color/Color"
import Count from "../Product/components/Count/Count"
import Review from "../Product/components/Review/Review"
import "./Product.scss";

const Product = (props) => {
    const [ colorChange, setColorChange ] = useState("white")
  const [ state, setState ] = useState("white")
  const [ count, setCount ] = useState(1)
  const [ isOpenReview, setIsOpenReview ] = useState(false);

  const price = 300
  const totalPrice = price * count;

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`/images/golf-ball-${colorChange}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />;
          <ColorButton changeBackground={colorChange} />
        </div>
        <div className="productDetailInfo">
          <span className="title">골프공</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color colorChange={colorChange} setColorChange={setColorChange} />
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
        <Review />
      </div>
    </div>
  );
};

export default Product;
