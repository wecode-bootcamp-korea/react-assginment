import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";
import profileImg from "../../assets/images/ryuchangsun.png";

const COLOR_CARD_LIST = [
    {
        id: "card1",
        colorName: "red",
        colorCode: "255, 0, 0",
    },
    {
        id: "card2",
        colorName: "yellow",
        colorCode: "255, 255, 0",
    },
    {
        id: "card3",
        colorName: "green",
        colorCode: "0, 128, 0",
    },
    {
        id: "card4",
        colorName: "blue",
        colorCode: "0, 0, 255",
    },
];

const Introduce = () => {
    const handleInput = () => {
        console.log("input 태그 동작");
    };

    const navigate = useNavigate();

    const goToProduct = () => {
        navigate("/product");
    };

    return (
        <div className="flex">
            <section className="introduce-item">
                <div className="image-area">
                    <img src={profileImg} alt="49기 류창선 프로필 사진" />
                </div>
                <div className="text-area">
                    <strong>류창선</strong>
                    <span>49기</span>
                </div>
                <div>
                    <input type="text" onChange={handleInput} />
                    <button type="button" onClick={goToProduct}>
                        클릭
                    </button>
                </div>
                <Link to="/product">product 페이지로 이동</Link>
            </section>

            <ul className="introduce-list">
                {COLOR_CARD_LIST.map((item) => {
                    return (
                        <li key={item.id} className="introduce-item">
                            <div
                                className="image-area"
                                style={{
                                    backgroundColor:
                                        "rgb(" + item.colorCode + ")",
                                }}
                            ></div>
                            <div className="text-area">
                                <strong>이름 : {item.colorName}</strong>
                                <span>rgb : {item.colorCode}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Introduce;
