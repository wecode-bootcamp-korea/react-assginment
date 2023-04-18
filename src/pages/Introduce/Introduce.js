import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Introduce/Introduce.scss'

const Introduce = () => {
  const navigate = useNavigate();
  const handleInput = () => {
    console.log('input 태그 동작')
  }
  const handleButton = () => {
    navigate('/product');
  }

  return (
    <>
    <div className='introduce'>
        <div className='box'>
            <img className='picture' src='/images/cat.jpeg'></img>
            <h1>전승범</h1>
            <h2>45기</h2>
            <input onChange={handleInput}></input>
            <button onClick={handleButton}>클릭</button>
            <Link to={'/product'}>프로덕트</Link>
        </div>
    </div>
    </>
  )
}

export default Introduce