// import React from "react";
// import "./common.scss";

//
import React from "react";

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
        type="text"
        onChange={(handleInput) => {
          console.log("input 태그 작동");
        }}
      ></input>
      <button
        onClick={(handleButton) => {
          console.log("button 태그 작동");
        }}
      >
        button
      </button>
    </div>
  );
};

const boxStyle = {
  border: "1px solid",
  borderRadius: "7px",
  width: "120px",
  margin: "auto",
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
