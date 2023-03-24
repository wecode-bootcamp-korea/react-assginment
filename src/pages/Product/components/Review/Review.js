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

const Review = () => {
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
        <img src="/images/avatar.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">위코드</div>
          <div className="itemName">골프공, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">배송도 빠르고 정말 좋아요.</div>
      <div className="reviewMain">
        {isView === true ? <CommentOn /> : null}
        <span className="reviewMainHandler" onClick={btnHandle}>
          {moreBtn}
        </span>
      </div>
    </div>
  );
};

export default Review;
