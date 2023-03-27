import React from "react"
import './ColorButton.scss';

function ColorButton(props) {
    return (
        <>
        <div className="colorHandler">
            <button className="colorButton white" onClick={() => { props.setColorName('white'); props.setColorChange('white');}} />
            <button className="colorButton red" onClick={() => { props.setColorName('red'); props.setColorChange('red');}} />
            <button className="colorButton yellow" onClick={() => { props.setColorName('yellow'); props.setColorChange('yellow');}} />
        </div>
        </>
    )
}

export default ColorButton;