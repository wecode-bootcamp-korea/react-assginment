import React from "react"
import '../ColorButton/ColorButton.scss'

const ColorButton = ({changeBackground,changeColor}) => {

  return (
    <button className={`colorButton ${changeBackground}`} onClick={changeColor}/>
  )
}

export default ColorButton