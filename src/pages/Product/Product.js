import React ,{useEffect, useState}from "react";
import "./Product.scss";
import ColorBtn from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {


  const [count , setCount] = useState(1);
  const [color, setColor] = useState('white');
  const [dataMap, setDataMap] = useState({})
  const totalPrice = count * dataMap.price;

  

  useEffect(() => {
    fetch('/data/MData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        // setPrice(data.price);
        // setTitel(data.title);
        // setImg(data.img);
        // setReview(data.review);

        setDataMap({
          price : data.price,
          img : data.img,
          title : data.title,
          review : data.review
        })

      });
  },[])

  return (
    <div className="product">
      <div className="productDetail">
        <div className="productDetailImg">
          <img
            src={`${dataMap.img}${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
            alt={`golf-ball`}
          />
          <button className="colorButton" style={{backgroundColor:color}}></button>
        </div>
        <div className="productDetailInfo">
          <span className="title">{dataMap.title}</span>
          <span>비거리를 비약적으로 늘려줍니다</span>
          <span>가격 : {dataMap.price} 원</span>
          <Color color = {color} setColor = {setColor}/>
          <div className="quantity">
            <span> 수량 : </span>
           <Count count= {count} setCount = {setCount}/>
          </div>
          <span>최종 가격 : {totalPrice.toLocaleString()} 원</span>
          <button className="buyBtn">구매하기</button>
        </div>
      </div>
      <div className="reviewList">
        <div className="reviewListHeader">
          <span>상품평</span>
        </div>
        <Review review = {dataMap.review}/>
      </div>
    </div>
  );
};

export default Product;
