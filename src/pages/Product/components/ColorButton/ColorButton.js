import React, { useState } from "react";
import "./ColorButton.scss";

const colorButton = (props) => {
    const colorChange = (color) => {
        props.setColor(color);
    };
    return (
        <>
            <button
                className={`colorButton ${props.color}`}
                onClick={() => {
                    colorChange(props.color);
                }}
            />
        </>
    );
};

export default colorButton;
