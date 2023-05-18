import React, { useState } from 'react';
import './Review.scss';

const Review = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [review, setReview] = useState('');
  const [viewMore, setViewMore] = useState('더보기 ▼');

  const switchBtn = () => {
    setIsHidden(!isHidden);
    if (isHidden) hideReview();
    else viewReview();
  };

  const hideReview = () => {
    setReview('');
    setViewMore('더보기 ▼');
  };

  const viewReview = () => {
    setReview(
      `주문한지 하루만에 배송이 도착해서 너무 좋았습니다. \n
      다음에도 필요하면 또 여기서 시킬 것 같아요.`
    );
    setViewMore('접기 ▲');
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
        <div className="reviewMainContents">{review}</div>
        <span className="reviewMainHandler" onClick={switchBtn}>
          {viewMore}
        </span>
      </div>
    </div>
  );
};

export default Review;
