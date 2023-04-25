import React from "react"
import {Link, useNavigate} from 'react-router-dom'
import './Introduce.scss'
import ColorCard from "./ColorCard"

const Introduce = () => {
  const navigate = useNavigate()

  const handleInput = () => {
    console.log("input 태그 동작")
  }
  
  const handleButton = () => {
    navigate('/product')
  }

  return (
    <div className="introBox">
      <div className="introduce">
        <img src="images/jellyfish.jpg" alt="해파리 사진" />
        <h2>김수정</h2>
        <h3>45기</h3>
        <input type="text" onChange={handleInput}></input>
        <button onClick={handleButton}>버튼</button>
        <Link to="/product">product 페이지로 이동</Link> 
      </div>
      <div className="colorCard">
        {COLOR_CARD_INFO.map((colorInfo) => (
          <ColorCard key={colorInfo.id} name={colorInfo.name} rgb={colorInfo.rgb}/>
))}
      </div>
    </div>
  )
} 

export default Introduce

const COLOR_CARD_INFO = [
  {id: 0, name: "red", rgb: "255, 0, 0"},
  {id: 1, name: "yellow", rgb: "255, 255, 0"},
  {id: 2, name: "green", rgb: "0, 128, 0"},
  {id: 3, name: "blue", rgb: "0, 0, 255"}
]