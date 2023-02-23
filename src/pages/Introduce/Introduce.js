import React from "react";
import "../../pages/Introduce/Introduce.scss";

import { Link } from "react-router-dom";

const Introduce = () => {
  //첫 부모태그 className은 컴포넌트이름을 그대로 사용하되, 소문자로 하는게 좋음 box 말고 introduce
  return (
    <div className="introduce">
      <div className="weCodeBox">
        <div className="wecodeStyle">{">"}wecode</div>
        <div className="infoWrap">
          <strong className="content">김준영</strong>
          <div className="subcontent">43기</div>
          <input
            className="input"
            type="text"
            onChange={() => {
              console.log("input 태그 작동"); //jsx 태그들 안에 함수표현식 쓰지 않기 -> 수정할 것
            }}
          ></input>
          <button
            className="button"
            onClick={() => {
              console.log("button 태그 작동");
            }}
          >
            클릭
          </button>
          <div>
            <Link to="/product" className="moveLink">
              product 페이지로 이동
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
