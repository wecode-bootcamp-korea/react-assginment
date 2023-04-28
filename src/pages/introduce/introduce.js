import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/common.scss";
import "./introduce.scss";

const Profile = () => {
  const navigate = useNavigate();
  const ToProduct = () => {
    navigate("/product");
  };
  function handleInput() {
    console.log("input 태그 동작");
  }

  return (
    <div className="container">
      <div className="profile">
        <img alt="myimg" src="/images/me.jpg" />
        <p className="content Lee">이경진</p>
        <p className="content 기수">45기</p>
        <div className="search">
          <input type="text" onChange={handleInput}></input>
          <button onClick={ToProduct}>클릭</button>
        </div>
        <Link to="/product" className="link">
          Product로 이동
        </Link>
      </div>
      <div className="colorContainer">
        {COLORCARD.map((color) => {
          return (
            <div className="colorCard" key={color.id}>
              <div className={`color ${color.className}`} />
              <div className="content">
                {color.name}
                <br />
                {color.rgb}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;

const COLORCARD = [
  { id: 1, className: "red", name: "이름 : red", rgb: "rgb : 255, 0, 0" },
  {
    id: 2,
    className: "yellow",
    name: "이름 : yellow",
    rgb: "rgb : 255, 255, 0",
  },
  { id: 3, className: "green", name: "이름 : green", rgb: "rgb : 0, 128, 0" },
  { id: 4, className: "blue", name: "이름 : blue", rgb: "rgb : 0, 0, 255" },
];
