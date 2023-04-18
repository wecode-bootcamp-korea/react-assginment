import React from 'react'
import '../Introduce/Introduce.scss'

const Introduce = () => {
  const handleInput = () => {
    console.log('input 태그 동작')
  }
  const handleButton = () => {
    console.log('button 태그 동작')
  }

  return (
    <div className='box'>
        <img className='picture' src='/images/cat.jpeg'></img>
        <h1>전승범</h1>
        <h2>45기</h2>
        <input onChange={handleInput}></input>
        <button onClick={handleButton}>클릭</button>
    </div>
  )
}

export default Introduce