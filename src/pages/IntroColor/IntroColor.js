import React from "react";
import "./IntroColor.scss";

const IntroColor = (props) => {
  return (
    <div className="miniProfileFrame">
      <div
        className="profileColor"
        style={{ backgroundColor: `rgb(${props.colorRGB})` }}
      />
      <div className="miniNameArea">
        <span className="miniProfileName">이름 : {props.name}</span>
        <span className="miniProfileSub">색상값 : {props.colorRGB}</span>
      </div>
    </div>
  );
};

export default IntroColor;
