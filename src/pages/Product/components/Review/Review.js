import React from "react";
import "./Review.scss";

const Review = (props) => {
  const { isReviewOpen, setIsReviewOpen } = props;

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
        {isReviewOpen ? (
          <div className="reviewMainContents">
            주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
            <br />
            다음에도 필요하면 또 여기서 시킬 것 같아요.
          </div>
        ) : (
          "" // false 일 때 '빈 문자열' 이라는 명확한 값이 존재하지 않는 상황 => '&& 연산자' 사용: 조건이 true 일 때만 보여주겠다 => isReviewOpen && (보여질 내용)}
        )}
        <span
          className="reviewMainHandler"
          onClick={() => {
            setIsReviewOpen(!isReviewOpen); // 어떠한 값 앞에 !(not 연산자) 붙이면 그 값의 정반대 값을 도출시킨다. => isReviewOpen의 초기값이 false이므로 클릭하면 true 도출 => 클릭 할때마다 왔다갔다
          }}
        >
          {isReviewOpen ? "접기 ▲" : "더보기 ▼"}
        </span>
      </div>
    </div>
  );
};

export default Review;
