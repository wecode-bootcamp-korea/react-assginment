import React from "react";
import "./Review.scss";

const Review = ({comment, setComment, dataReview})  => {

  const handleOpen = () => {
    setComment(!comment);
  }

  let openFold = comment ? '더보기 ▼' : '접기▲';

  return (
    <div className="review">
      <div className="user">
        <img src="/images/avatar.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">위코드</div>
          <div className="itemName">골프공, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">{dataReview}</div>
      <div className="reviewMain">
        { comment ? '' : <div className="reviewMainContents">
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
        </div>}
        <span className="reviewMainHandler" onClick={handleOpen}>
          {openFold}
        </span>
      </div>
    </div>
  );
};

export default Review;
