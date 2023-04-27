import React from "react";
import './ColorButton.scss'
const ColorButton = (props) => {
    console.log(props)
    return(
        <>
         <button className={`colorButton ${props.name}`}
          onClick={() => props.click(props.name)}  
          />
        </>
    )
}

export default ColorButton;


