import React from "react"
import './Introduce.css'
import {Link, useNavigate} from 'react-router-dom'

const Introduce = () => {
  const navigate = useNavigate()

  const handleInput = () => {
    console.log("input 태그 동작")
  }
  
  const handleButton = () => {
    navigate('/product')
  }

  return (
    <div className="introduce">
      <img src="images/jellyfish.jpg" alt="해파리 사진" />
      <h2>김수정</h2>
      <h3>45기</h3>
      <input type="text" onChange={handleInput}></input>
      <button onClick={handleButton}>버튼</button>
      <Link to="/product">product 페이지로 이동</Link>
    </div>
  )
} 

export default Introduce