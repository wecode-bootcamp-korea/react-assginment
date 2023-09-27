import React, {useState} from "react";
import "./ColorButton.scss";
import Color from "../Color/Color";

const ColorButton = (props) => {


    return (
        <>
            <button className={`colorButton ${props.color}`} onClick={props.onClick} />
            
        </>
    )
}

export default ColorButton;