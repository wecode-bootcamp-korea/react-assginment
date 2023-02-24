import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {

    props = {color:"white"}

    return (
        <button className={`colorButton ${props.color}`}>
        </button>
    );
};

export default ColorButton;