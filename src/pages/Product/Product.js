import React, {useState, useEffect} from "react";
import ColorButton from "../Product/components/ColorButton/ColorButton"
import Color from "../Product/components/Color/Color"
import Count from "../Product/components/Count/Count"
import Review from "../Product/components/Review/Review"
import "./Product.scss";

const Product = () => {
  const [ colorChange, setColorChange ] = useState("white")
  const [ count, setCount ] = useState(1)
  const [ product, setProduct ] = useState([])
  const price = 300
  const totalPrice = price * count

  useEffect(() => {
    fetch('/data/product_info.json').then(res => res.json()).then(data => {
      setProduct(data)
    })
  }, [])
  
  return (
    <div className="product">
      {product.map((productInfo) => (
      <div key={productInfo.id} >
        <div className="productDetail" >
          <div className="productDetailImg">
            <img
              src={`${productInfo.img}${colorChange}.jpg`}
              alt={productInfo.title}
            />
            <ColorButton changeBackground={colorChange} />
          </div>
          <div className="productDetailInfo">
            <span className="title">{productInfo.title}</span>
            <span>비거리를 비약적으로 늘려줍니다</span>
            <span>가격 : {productInfo.price.toLocaleString()} 원</span>
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
            <Review review={productInfo.review} />
        </div>
      </div>
      ))};
    </div>
  )
};

export default Product;
