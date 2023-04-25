import React, { useEffect, useState } from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
  // 가격*수량 = 최종가격 로직
  const [count, setCount] = useState(1);
  // console.log("수량 알려줘 ", count);

  const price = 300;
  // const price = productInfo[0].price;
  const totalPrice = price * count;

  // 색상 누르면, <ColorButton /> 색상 변경하기.
  const [color, setColor] = useState("white");
  console.log("지금 색상 알려줘 ", color);

  // 색상 누르면, 상품 이미지 변경하기.
  // setImg가 필요있는지 다시 생각해보기.
  // => setImg는 필요가 없다. color라는 state를 전역에서 공유하기 때문에(부모에서 state 관리를 해줌) // ColorButton 컴포넌트와 해당 컴포넌트 내 button 태그 둘 다 클릭에 해당하는 이벤트핸들러가 존재한다. -> Warning 발생
  const [img, setImg] = useState(`/images/golf-ball-${color}.jpg`);

  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch("/data/productInfo.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductInfo(data);
      });
  }, []);

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            // src={`/images/golf-ball-red.jpg`} // color 이름에 따라 다른 이미지 경로 넣기/
            // src={img}
            // src={`/images/golf-ball-${color}.jpg`}
            src={`${productInfo[0] && productInfo[0].img}${color}.jpg`}
            alt={`golf-ball`}
          />
          <ColorButton color={color} img={img} />
        </div>
        <div className="productDetailInfo">
          <span className="title">
            {/* {productInfo[0] ? productInfo[0].title : null} */}
            {productInfo[0] && productInfo[0].title}
          </span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {price.toLocaleString()} 원</span>
          <Color color={color} setColor={setColor} setImg={setImg} />
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
        <Review productInfo={productInfo} />
      </div>
    </div>
  );
};

export default Product;
