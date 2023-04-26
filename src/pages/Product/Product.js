import React, { useState, useEffect } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import ProductInfo from "./ProductInfo";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [productArr, setProductArr] = useState([]);

  useEffect(() => {
    fetch("/data/productData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductArr(data);

        // setCount(data.count);
        // console.log(data.count);
      });
  }, []);

  // const price = 300;

  return (
    <div className="product">
      {productArr.map((info) => {
        console.log("render!");
        console.log(info.count);
        console.log("render!11");
        // setCount(info.count);
        const totalPrice = info.price * count;

        return (
          // <ProductInfo
          //   key={info.id}
          //   img={info.img}
          //   title={info.title}
          //   price={info.price}
          //   count={count} //////
          //   review={info.review}
          //   color={color}
          //   setColor={setColor}
          //   setCount={setCount}
          // />
          <div className="productInfo" key={info.id}>
            <div className="productDetail">
              <div className="productDetailImg">
                <img
                  src={`${info.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
                  alt={`golf-ball`}
                />
                <ColorButton color={color} setColor={setColor} />
                {/* ColorButton 컴포넌트 위치 */}
              </div>
              <div className="productDetailInfo">
                <span className="title">{info.title}</span>
                {/* <span>비거리를 비약적으로 늘려줍니다</span> */}
                <span>가격 : {info.price.toLocaleString()} 원</span>
                <Color color={color} setColor={setColor} />
                {/* Color 컴포넌트 위치 */}
                <div className="quantity">
                  <span> 수량 : </span>
                  <Count count={info.count} setCount={setCount} />
                  {/* Count 컴포넌트 위치 */}
                </div>
                <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
                <button className="buyBtn">구매하기</button>
              </div>
            </div>

            <div className="reviewList">
              <div className="reviewListHeader">
                <span>상품평</span>
              </div>
              <Review review={info.review} />
              {/* Review 컴포넌트 위치 */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
