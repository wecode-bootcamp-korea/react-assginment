import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  return (
    <div className="introduce">
      <Contents />
      <div className="colorCards">
        {Colors.map((item) => (
          <ColorCards name={item.name} rgb={item.rgb} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const Colors = [
  { name: "red", rgb: "255, 0, 0", id: 1 },
  { name: "yellow", rgb: "255, 255, 0", id: 2 },
  { name: "green", rgb: "0, 128, 0", id: 3 },
  { name: "blue", rgb: "0, 0, 255", id: 4 },
];

export const Contents = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <img className="profile-img" src="/images/cat.jpeg" alt="" />
      <div className="profile-info">
        <div className="name">김희연</div>
        <div className="cohort-number">45기</div>
        <Input />
        <Button link={navigate} />
        <div>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
    </div>
  );
};

export const Input = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };
  return <input type="text" className="input" onChange={handleInput} />;
};

export const Button = (props) => {
  const handleButton = () => {
    console.log("button 태그 동작");
    props.link("/product");
  };

  return (
    <button className="btn" onClick={handleButton}>
      클릭
    </button>
  );
};

export const ColorCards = (props) => {
  const { name, rgb } = props;
  return (
    <div className="colors-wrapper">
      <div className={`color-box ${name}`} />
      <div className="profile-info">
        <div className="name">{`이름 : ${name}`}</div>
        <div className="cohort-number">{`rgb : ${rgb}`}</div>
      </div>
    </div>
  );
};
export default Introduce;
