import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) =>{
    return(

        <button className={"colorButton " + props.color} onClick={props.btn} />  

    )
} 

export default ColorButton;
