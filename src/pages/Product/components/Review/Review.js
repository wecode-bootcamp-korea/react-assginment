import React, { useState } from "react";
import "./Review.scss";

const CommentOn = () => {
  return (
    <div className="reviewMainContents">
      주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
      <br />
      다음에도 필요하면 또 여기서 시킬 것 같아요.
    </div>
  );
};

const Review = ({ review }) => {
  const [moreBtn, setMoreBtn] = useState("더보기 ▼");

  const [isView, setIsView] = useState(false);

  const btnHandle = () => {
    if (moreBtn === "더보기 ▼") {
      setMoreBtn("접기 ▲");
      setIsView(true);
    } else {
      setMoreBtn("더보기 ▼");
      setIsView(false);
    }
  };

  return (
    <div className="review">
      <div className="user">
        <img src="/images/profile04.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">jiyoeun</div>
          <div className="itemName">골프공, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">{review}</div>
      <div className="reviewMain">
        {isView ? <CommentOn /> : null}
        <span className="reviewMainHandler" onClick={btnHandle}>
          {moreBtn}
        </span>
      </div>
    </div>
  );
};

export default Review;
