import React, { useState } from "react";
import "./Review.scss";

const Review = (props) => {
  const { viewing, toggleReview, review } = props;

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
        {!viewing ? (
          <div className="reviewMainContents">
            {review}
            <br />
            다음에도 필요하면 또 여기서 시킬 것 같아요.
          </div>
        ) : null}
        <span
          className="reviewMainHandler"
          onClick={() => {
            toggleReview();
          }}
        >
          {viewing ? "더보기 ▼" : "접기▲"}
        </span>
      </div>
    </div>
  );
};

export default Review;
