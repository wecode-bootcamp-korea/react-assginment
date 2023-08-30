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
                </div>
            </div>
        </>
    );
};

export default Introduce;
