import React from "react";
import './ColorButton.scss';

const ColorButton = (props) => {



    const handleClickOn = () => {

        props.handleClick(props.selectColor);
  
    }


    return (
        <div>
            <button
                className={`colorButton ${props.selectColor}`}
                onClick={handleClickOn}
            />
        </div>
    );
};

export default ColorButton;


