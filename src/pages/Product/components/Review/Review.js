import React, { useState } from "react";
import "./Review.scss";

const Review = () => {
    const [toggleReview, setToggleReview] = useState(false);

    return (
        <div className="review">
            <div className="user">
                <img src="/images/avatar.jpg" alt="avatar" />
                <div className="userInfo">
                    <div className="name">위코드</div>
                    <div className="itemName">골프공, white 색상 구매</div>
                </div>
            </div>
            <div className="reviewTitle">배송도 빠르고 정말 좋아요.</div>
            <div className="reviewMain">
                <div className={`reviewMainContents${toggleReview ? " hide" : ""}`}>
                    주문도 빠르고
                </div>
                <span
                    className="reviewMainHandler"
                    onClick={() => {
                        setToggleReview(!toggleReview);
                    }}
                >
                    {toggleReview ? "더보기 ▼" : "접기 ▲"}
                </span>
            </div>
        </div>
    );
};

export default Review;
