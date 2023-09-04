import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
    const [countNum, setCountNum] = useState(1);
    const handlePlusButton = () => {
        setCountNum(countNum + 1);
    };
    const handleMinusButton = () => {
        if (countNum <= 1) {
            return;
        } else {
            setCountNum(countNum - 1);
        }
    };

    const resetButton = () => {
        setCountNum(1);
    };

    return (
        <div className="count">
            <div className="countInput">
                <button
                    onClick={() => {
                        handleMinusButton(countNum);
                    }}
                >
                    -
                </button>
                <div className="countInputText">{countNum}</div>
                <button
                    onClick={() => {
                        handlePlusButton(countNum);
                    }}
                >
                    +
                </button>
            </div>
            <button
                className="resetBtn"
                onClick={() => {
                    resetButton();
                    console.log(resetButton());
                }}
            >
                reset
            </button>
        </div>
    );
};

export default Count;
