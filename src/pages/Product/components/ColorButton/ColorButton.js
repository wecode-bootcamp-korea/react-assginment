import React from 'react'
import "./ColorButton.scss";

const ColorButton = (props) => { 
  const handle = () => {
    props.change(`selected ${props.choice}`);
    props.img(`images/golf-ball-${props.choice}.jpg`);
    props.setPre(`colorButton ${props.choice}`);
  }

  return (
    <button className={props.className} onClick={handle} />
  )
}

export default ColorButton