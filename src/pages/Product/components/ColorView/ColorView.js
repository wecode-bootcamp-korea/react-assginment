import React from "react";


const ColorView = (props) => {

    return (
        <>  
            <span className="colorText">
                색상 :
                <div className={`selected ${props.color}`} />
                {props.color}
            </span>
        </>
    )
}

export default ColorView;