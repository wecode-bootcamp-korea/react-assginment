import React, { useState } from "react";
import "./Color.scss";

const Color = () => {
    const [color, setColor] = useState("");

    const colorChange = (color) => {
        setColor(color);
    };

    return (
        <div className="color">
            <span className="colorText">
                색상 :
                <div className={`selected ${color}`} />
                {color}
            </span>
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
        </div>
    );
};

export default Color;
