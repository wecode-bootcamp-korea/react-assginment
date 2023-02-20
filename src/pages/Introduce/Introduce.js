import React from "react";

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
};

const margin = {
  marginLeft: "10px",
};
export default Introduce;
