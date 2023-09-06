import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../Introduce/wecode.png";
import "./Introduce.scss";

const colorInfo = [
  { id: 0, color: "red", rgb: "255, 0, 0" },
  { id: 1, color: "yellow", rgb: "255, 255, 0" },
  { id: 2, color: "green", rgb: "0, 128, 0" },
  { id: 3, color: "blue", rgb: "0, 0, 255" },
];

const Info = () => {
  return (
    <div className="introduceContainerInfo">
      <div className="name">JYJ</div>
      <div className="generation">49기</div>
    </div>
  );
};

const Form = (props) => {
  return (
    <form className="introduceContainerForm">
      <input
        onChange={() => {
          console.log("input 태그 동작");
        }}
      ></input>
      <input
        type="button"
        value="클릭
          "
        onClick={() => {
          props.productLink();
        }}
      />
    </form>
  );
};

const ProductLink = () => {
  return (
    <div className="productLink">
      <Link to="/product">product 페이지로 이동</Link>
    </div>
  );
};

const Introduce = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product");
  };
  return (
    <div className="introduce">
      <div className="introduceContainer">
        <img className="wecodeLogo" src={logo} alt="wecode" />
        <Info />
        <Form productLink={goToProduct} />
        <ProductLink />
      </div>
      <div className="introduce2">
        {colorInfo?.map((info) => {
          return (
            <div className="introduceContainer2" key={info.id}>
              <div className={`box ${info.color}`}></div>
              <div>
                <div>이름 : {info.color}</div>
                <div>rgb : {info.rgb}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Introduce;
