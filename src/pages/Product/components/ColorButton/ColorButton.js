import React from "react";
import "./ColorButton.scss";

const colorButton = (props) => {
    const colorChange = (color) => {
        props.setColor(color);
    };

    return (
        <>
            <div className="colorHandler">
                <button
                    className="colorButton white"
                    onClick={() => {
                        colorChange("white");
                    }}
                />
                <button
                    className="colorButton red"
                    onClick={() => {
                        colorChange("red");
                    }}
                />
                <button
                    className="colorButton yellow"
                    onClick={() => {
                        colorChange("yellow");
                    }}
                />
            </div>
        </>
    );
};

export default colorButton;
