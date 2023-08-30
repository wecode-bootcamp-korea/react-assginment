import React from "react";
import "./Intorduce.css";
const Introduce = () => {
  return (
    <div className="Introduction">
      <div className="container">
        <div className="informationcontainer">
          <img
            src="/images/golf-ball-red.jpg"
            alt="ballimage"
            className="ballimage"
          />
          <div className="letter">
            <h1>권순우</h1>
            <h2>49기</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
