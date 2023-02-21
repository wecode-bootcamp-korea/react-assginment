import React from "react";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <div style={boxStyle} className="box">
      <div className="boxWwrap">
        <div style={wecodeStyle} className="weCodeBox">
          <h2>{">"}wecode</h2>
        </div>
      </div>
      <strong style={margin} className="info">
        홍태훈
      </strong>
      <div style={margin}>43기</div>
      <div style={flex}>
        <input style={input} onChange={handleInput}></input>

        <Link to="/product">
          <button style={button} onClick={handleButton}>
            클릭
          </button>
        </Link>
      </div>
      <div style={{ fontSize: "13px" }}>
        <Link to="/product">product페이지로 이동</Link>
      </div>
    </div>
  );
};

const wecodeStyle = {
  display: "flex",
  height: "100px",
  backgroundColor: "black",
  color: "white",
  width: "100px",
  alignItems: "center",
  margin: "10px auto",

  justifyContent: "center",
  borderRadius: "5px",
};

const boxStyle = {
  border: "1px solid",

  borderRadius: "5px",
  width: "120px",
  margin: "auto",
  marginTop: "25%",
};

const margin = {
  marginLeft: "10px",
};

const input = {
  width: "60px",
  margin: "0px 0px 10px 6px",
  height: "14px",
};

const button = {
  width: "35px",
  height: "20px",
  marginRight: "10px",
  fontSize: "10px",
};

const flex = {
  display: "flex",
};

function handleInput() {
  console.log("input 태그동작");
}

function handleButton() {
  console.log("button 태그동작");
}

export default Introduce;
