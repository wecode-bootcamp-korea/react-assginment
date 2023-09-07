import React, { useEffect, useState } from "react";
import Color from "./components/Color/Color";
import ColorButton from "./components/ColorButton/ColorButton";
import Count from "./components/Count/Count";
import Review from "./components/Review/Review";
import "./Product.scss";

const Product = () => {
    const [color, setColor] = useState("white");
    const [count, setCount] = useState(1);
    const [review, setReview] = useState(true);
    const [text, setText] = useState("접기 ▲");
    const [dataList, setDataList] = useState({});
    const price = dataList.price;
    const totalPrice = price;
    let finalPrice = totalPrice * count;

    useEffect(() => {
        fetch("/data/mock.json", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setDataList(data[0]);
            });
    }, []);

    return (
        <div className="product">
            <div className="productDetail">
                <div className="productDetailImg">
                    <img
                        src={`/images/golf-ball-${color}.jpg`} // color 이름에 따라 다른 이미지 경로 넣기
                        alt={`golf-ball`}
                    />
                    {/* ColorButton 컴포넌트 위치 */}
                    <div className="color">
                        <ColorButton color={color} setColor={setColor} />
                    </div>
                </div>
                <div className="productDetailInfo">
                    <span className="title">{dataList.title}</span>
                    <span>비거리를 비약적으로 늘려줍니다</span>
                    <span>가격 : {dataList.price} 원</span>
                    {/* Color 컴포넌트 위치 */}
                    <Color color={color} setColor={setColor} />
                    <div className="quantity">
                        <span> 수량 : </span>
                        {/* Count 컴포넌트 위치 */}
                        <Count
                            count={count}
                            setCount={setCount}
                            price={price}
                        />
                    </div>
                    <span>최종 가격 : {finalPrice.toLocaleString()} 원</span>
                    <button className="buyBtn">구매하기</button>
                </div>
            </div>
            <div className="reviewList">
                <div className="reviewListHeader">
                    <span>상품평</span>
                    <div>{dataList.reviewDetail}</div>
                </div>
                {/* Review 컴포넌트 위치 */}
                <Review
                    review={review}
                    setReview={setReview}
                    text={text}
                    setText={setText}
                    reviewTitle={dataList.review}
                />
            </div>
        </div>
    );
};

export default Product;
