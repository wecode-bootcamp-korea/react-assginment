import React, { useState, useRef } from 'react';
import './Review.scss';

const Review = ({ review }) => {
  const [button, setButton] = useState('더보기 ▼');
  const mainReview = useRef();

  function seeMore() {
    if (button === '더보기 ▼') {
      setButton('접기 ▲');
      mainReview.current.classList.add('show');
    } else if (button === '접기 ▲') {
      setButton('더보기 ▼');
      mainReview.current.className = 'reviewMainContents';
    }
  }

  return (
    <div className="review">
      <div className="user">
        <img src="/images/avatar.jpg" alt="avatar" />
        <div className="userInfo">
          <div className="name">위코드</div>
          <div className="itemName">골프공, white 색상 구매</div>
        </div>
      </div>
      <div className="reviewTitle">{review}</div>
      <div className="reviewMain">
        <div ref={mainReview} className="reviewMainContents">
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
        </div>
        <span className="reviewMainHandler" onClick={seeMore}>
          {button}
        </span>
      </div>
    </div>
  );
};

export default Review;
