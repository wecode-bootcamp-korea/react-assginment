import React from "react"
import "./ColorCard.scss"

const ColorCard = ({id, name, rgb}) => {
  return (
    <div className="ColorCard" key={{id}}>
      <div className={`colorBox ${name}`} />
      <p>이름 : {name}</p>
      <p>rgb : {rgb}</p>
    </div>
  )
}
export default ColorCard

