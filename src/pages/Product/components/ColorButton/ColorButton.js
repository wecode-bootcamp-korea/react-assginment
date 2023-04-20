import React from "react"
import '../ColorButton/ColorButton.scss'

const ColorButton = (props) => {

  return (
    <button className={`colorButton ${props.changeBackground}`} onClick={props.changeColor}/>
  )
}

export default ColorButton