import React, { useState } from "react";
import "./Review.scss";

const Review = ({ product, review, setReview }) => {
  const handleExpand = () => {
    setReview(!review);
  };
  return (
    <div className="review">
      <div className="user">
        <img src="/images/avatar.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">위코드</div>
          <div className="itemName">골프공, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">{product.review}</div>
      <div className="reviewMain">
        <div className="reviewMainContents">
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
        </div>
        {review ? (
          <span className="reviewMainHandler" onClick={handleExpand}>
            {/* onClick={함수()}를하면 함수를 그냥 호출해서 에러가난다. */}
            더보기 ▼
          </span>
        ) : (
          <div className="reviewMainExpanded">
            추가 내용이 들어갈 부분입니다.
            <br />
            이렇게 확장되어 나타납니다.
            <br />
            <span className="reviewMainHandler" onClick={handleExpand}>
              접기 ▲
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
