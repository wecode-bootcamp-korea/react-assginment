import React from "react";
import "../../style/common.scss";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <div style={boxStyle} className="box">
      <div className="boxWrap">
        <div style={wecodeStyle} className="weCodeBox">
          <h2>{">"}wecode</h2>
        </div>
      </div>
      <strong style={nameStyle} className="content">
        김준영
      </strong>
      <div style={infoStyle} className="subcontent">
        43기
      </div>
      <input
        className="input"
        type="text"
        onChange={(handleInput) => {
          console.log("input 태그 작동"); //jsx 태그들 안에 함수표현식 쓰지 않기 -> 수정할 것
        }}
      ></input>
      <button
        className="button"
        onClick={(handleButton) => {
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
  );
};

const boxStyle = {
  border: "1px solid",
  borderRadius: "7px",
  width: "150px",
  height: "240px",
  margin: "auto",
};

const wecodeStyle = {
  display: "flex",
  height: "130px",
  backgroundColor: "black",
  color: "white",
  width: "130px",
  alignItems: "center",
  margin: "10px auto",

  justifyContent: "center",
  borderRadius: "7px",
};

const nameStyle = {
  marginLeft: "10px",
  fontSize: "20px",
};

const infoStyle = {
  marginLeft: "10px",
  fontSize: "8px",
};
export default Introduce;
