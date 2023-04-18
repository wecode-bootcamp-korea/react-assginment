import React from "react"
import './Introduce.css'

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작")
  }
  
  const handleButton = () => {
    console.log("button 태그 동작")
  }

  return (
    <div className="introduce">
      <img src="images/jellyfish.jpg" alt="해파리 사진" />
      <h2>김수정</h2>
      <h3>45기</h3>
      <input type="text" onChange={handleInput}></input>
      <button onClick={handleButton}>버튼</button>
    </div>
  )
} 

export default Introduce