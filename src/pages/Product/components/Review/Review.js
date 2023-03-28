import React, { useState } from "react";
import "./Review.scss";

const Review = (props) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [buttonInfo, setButtonInfo] = useState("더보기 ▼");

  function MoreInfo() {
    return (
      <div className="reviewMainContents">
        {props.productReview}
      </div>
    );
  }

  function Click(buttonClick) {
    return buttonClick === false
      ? (setButtonInfo("접기 ▲"), setButtonClick(true))
      : (setButtonInfo("더보기 ▼"), setButtonClick(false));
  }

  // function showInfo() {
  //   return buttonClick === true ? <MoreInfo></MoreInfo> : null;
  // }

  return (
    <>
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
          {/** 여기에 리뷰 더보기 정보 추가 */}
          {buttonClick === true ? <MoreInfo /> : null}
          <span
            className="reviewMainHandler"
            onClick={() => {
              Click(buttonClick);
            }}
          >
            {buttonInfo}
          </span>
        </div>
      </div>
    </>
  );
};

export default Review;
