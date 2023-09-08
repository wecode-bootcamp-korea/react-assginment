import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
    const { countNum, setCountNum } = props;
    const handlePlusButton = () => {
        props.setCountNum(countNum + 1);
    };
    const handleMinusButton = () => {
        if (props.countNum <= 1) {
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
