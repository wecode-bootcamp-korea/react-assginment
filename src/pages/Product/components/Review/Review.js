import React, { useState } from "react";
import "./Review.scss";

const Review = () => {
  const [direction, setDirection] = useState(true);

  const [review, setReview] = useState([
    {
      id: "1",
      content: "주문한지 하루만에 배송이 도착해서 너무 좋았습니다.",
    },
    {
      id: "2",
      content: "다음에도 필요하면 또 여기서 시킬 것 같아요.",
    },
  ]);

  const handleReview = () => {
    setDirection(!direction);
  };

  const directionReview = direction ? review : [];
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
        <div className="reviewMainContents">
          {directionReview.map((review, id) => {
            return (
              <span key={id}>
                {review.content}
                <br />
              </span>
            );
          })}
        </div>
        <span className="reviewMainHandler" onClick={handleReview}>
          {direction ? "더보기 ▼" : "접기 ^"}
        </span>
      </div>
    </div>
  );
};

export default Review;
