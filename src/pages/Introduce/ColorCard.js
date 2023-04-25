import React from "react"
import "./ColorCard.scss"

const ColorCard = ({id, name, rgb}) => {
  console.log(name)
  return (
    <div className="colorcardItem" key={{id}}>
      <div className={`colorBox ${name}`} />
      <p>이름 : {name}</p>
      <p>rgb : {rgb}</p>
    </div>
  )
}
export default ColorCard

