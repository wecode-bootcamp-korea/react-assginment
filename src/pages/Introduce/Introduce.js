import React from "react";

const IntroduceStyle = {
  border: "1px solid black",
  width: "110px",
  borderRadius: "5px",
};

const mainStyle = {
  margin: "8px",
  backgroundColor: "black",
  borderRadius: "5px",
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  height: "100px",
};

const userStyle = {
  margin: "0px 0px 5px 10px",
  fontSize: "10px",
};

const Introduce = () => {
  return (
    <div className="Introduce" style={IntroduceStyle}>
      <section className="main" style={mainStyle}>
        <div className="content" style={contentStyle}>
          ＞wecode
        </div>
      </section>
      <section className="userInfo">
        <div className="user" style={userStyle}>
          <b>김진평</b>
          <br />
          43기
        </div>
      </section>
    </div>
  );
};

export default Introduce;
