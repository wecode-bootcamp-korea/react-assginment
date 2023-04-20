import React from 'react'
import "./ColorButton.scss";

const ColorButton = (props) => { 
    
  return (
    <button className={props.className} onClick={()=>{props.change(`selected ${props.choice}`)}} />
  )
}

export default ColorButton