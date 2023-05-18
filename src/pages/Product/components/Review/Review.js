import React, { useState } from "react";
import "./Review.scss";

let count = 0 ;
const Review = () => {
  let [review,setReview] = useState(false);
  let [btn,setBtn] = useState('더보기 ▼');
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
        {
          review === true ? <ReviewMainContents/> : null
        }
        {/* // <div className="reviewMainContents">
        //   주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
        //   <br />
        //   다음에도 필요하면 또 여기서 시킬 것 같아요.
        // </div> */}
        <span className="reviewMainHandler" onClick={() => {
          setReview(!review);
          count++;
          if(count%2===1){
            setBtn('접기 ▲')
          }else{
            setBtn('더보기 ▼')
          }
        }}>
          {btn}
        </span>
      </div>
    </div>
  );
};

const ReviewMainContents = () => {
  return(
    <div className="reviewMainContents">
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
    </div>
  )
}

export default Review;
