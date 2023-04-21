import React from 'react'
import "./ColorButton.scss";

const ColorButton = ({className, color, ProductSetColor}) => { 
  const handle = () => {
    ProductSetColor()
  }

  return (
    <button className={className} onClick={handle} />
  )
}

export default ColorButton