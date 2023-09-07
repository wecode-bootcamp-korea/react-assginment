import React from "react";
import "./Review.scss";

const Review = (props) => {
  // const [moreBox, setMoreBox] = useState("none");
  // const [moreBtn, setMoreBtn] = useState("open");
  const moreBtnFunction = () => {
    if (props.moreBtn === "open") {
      document.querySelector(".reviewMainHandler").innerText = "접기 ▲";
      props.setMoreBox("block");
      props.setMoreBtn("close");
    } else if (props.moreBtn === "close") {
      document.querySelector(".reviewMainHandler").innerText = "더보기 ▼";
      props.setMoreBox("none");
      props.setMoreBtn("open");
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
      <div className="reviewTitle">{props.review}</div>
      <div className="reviewMain">
        <div className="reviewMainContents" style={{ display: props.moreBox }}>
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
        </div>
        <span className="reviewMainHandler" onClick={moreBtnFunction}>
          더보기 ▼
        </span>
      </div>
    </div>
  );
};

export default Review;
