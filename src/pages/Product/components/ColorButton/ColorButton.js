import React from 'react';

const ColorButton = (props) => {
    
    return (
        <>
            <button className="colorButton white" onClick={() => {props.setColor("white")}} />
            <button className="colorButton red" onClick={() => {props.setColor("red")}} />
            <button className="colorButton yellow" onClick={() => {props.setColor("yellow")}} />
        </> )
}
export default ColorButton;