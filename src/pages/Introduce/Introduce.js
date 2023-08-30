import React from "react";
import "./style.css";

const Introduce = () => {
    return (
        <>
            <div className="intro-wrapper">
                <div className="intro-box">
                    <p className="img-box">
                        <img src="/images/cat.jpeg" alt="사진" />
                    </p>
                    <p className="name">김세연</p>
                    <span>49기</span>
                    <div className="input-wrapper">
                        <input
                            className="input-name"
                            type="text"
                            onChange={(hadleInput) => console.log("input 태그 동작")}
                        />
                        <button onClick={(handleButton) => console.log("button태그 동작")}>
                            클릭
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Introduce;
