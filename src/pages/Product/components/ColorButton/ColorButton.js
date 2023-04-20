import React from "react"
import '../ColorButton/ColorButton.scss'

const ColorButton = (props) => {
console.log(props)
  return (
    <button className={`colorButton ${props.changeBackground}`} onClick={props.changeColor}/>
  )
}

export default ColorButton