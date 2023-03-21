import React from "react";
import { Link } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  //const [inputValue, setInputValue] = usestate(" ");

  const HandleInput = () => {
    console.log("input태그 동작");
  };

  const HandleButton = (e) => {
    e.preventDefault();
    console.log("button태그 동작");
  };

  return (
    <div className="introduce">
      <div className="image"></div>
      <p className="name">44기 조건호</p>
      <form>
        <input
          className="input"
          type="text"
          onChange={(e) => {
            HandleInput(e);
          }}
        />
        <button className="button" onClick={HandleButton}>
          클릭
        </button>
      </form>
      <Link className="link" to="./product">
        product 페이지로 넘어가기
      </Link>
    </div>
  );
};

export default Introduce;
