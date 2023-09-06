import React, { useState } from "react";
import "./Product.scss";
import ColorButton from "./components/ColorButton/ColorButton";
import Color from "./components/Color/Color";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";

const Product = () => {
    const [color, setColor] = useState("white");
    const [countNum, setCountNum] = useState(1);

    const price = 300;
    const totalPrice = price * countNum;

    return (
        <div className="product">
            <div className="productDetail">
                <div className="productDetailImg">
                    <img
                        src={`/images/golf-ball-${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
                        alt={`golf-ball`}
                    />
                    <ColorButton color={color} />
                </div>
                <div className="productDetailInfo">
                    <span className="title">골프공</span>
                    <span>비거리를 비약적으로 늘려줍니다</span>
                    <span>가격 : {price.toLocaleString()} 원</span>
                    <Color color={color} setColor={setColor} />
                    <div className="quantity">
                        <span> 수량 : </span>
                        <Count countNum={countNum} setCountNum={setCountNum} />
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
