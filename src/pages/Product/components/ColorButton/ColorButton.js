import React from "react";

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


