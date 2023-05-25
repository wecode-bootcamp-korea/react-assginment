import React from "react";
import "./Color.scss";
import React,{useState} from "react";

const Color = () => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" />
        white
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => {}} />
        <button className="colorButton red" onClick={() => {}} />
        <button className="colorButton yellow" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Color;
