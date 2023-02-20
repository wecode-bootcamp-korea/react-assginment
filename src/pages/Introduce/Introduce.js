import React from "react";
import Profile from "./img/KakaoTalk_20230213_204309040.jpg";

const Introduction = () => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "20%",
          height: "50%",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <img
          style={{ width: "100%", height: "90%", borderRadius: "15px" }}
          src={Profile}
          alt=""
        />
        <p style={{ margin: 0 }}>
          신정호
          <br />
          43기
        </p>
      </div>
    </main>
  );
};
export default Introduction;
