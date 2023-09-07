import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

const Introduce = () => {
    const navigate = useNavigate();
    const goProduct = () => {
        navigate("/Product");
    };

    const INTRO = [
        { boxColor: "red", rgb: "rgb : 255, 0, 0 ", name: "이름 : red" },
        { boxColor: "yellow", rgb: "rgb : 255, 255, 0 ", name: "이름 : yellow" },
        { boxColor: "green", rgb: "rgb : 0, 128, 0 ", name: "이름 : green" },
        { boxColor: "blue", rgb: "rgb : 0, 0, 255 ", name: "이름 : blue" },
    ];
    return (
        <>
            <div className="intro-wrapper">
                <div className="intro-box">
                    <p className="img-box">
                        <img src="/images/cat.jpeg" alt="사진" />
                    </p>
                    <p className="name">김세연</p>
                    <span className="class-num">49기</span>
                    <div className="input-wrapper">
                        <input
                            className="input-name"
                            type="text"
                            onChange={(hadleInput) => console.log("input 태그 동작")}
                        />
                        <button onClick={goProduct}>클릭</button>
                        <Link to="/product">product페이지로 이동</Link>
                    </div>
                </div>
                <div className="intro-card-wrapper">
                    {INTRO.map((info) => (
                        <div className="intro-box" key={info.name}>
                            <p className="img-box" style={{ backgroundColor: info.boxColor }}></p>
                            <p className="name">{info.name}</p>
                            <span className="class-num">{info.rgb}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Introduce;
