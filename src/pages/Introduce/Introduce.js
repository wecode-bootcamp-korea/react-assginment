import React from 'react';
import './Introduce.css'

const Introduce =()=>{
    function handleInput(){
        console.log( "input 태그 동작")
    }
    function handleButton(){
        console.log("button 태그 동작")
     }
    return(
    
        <div className='Bigbox'>
            <div className='Myimg'>
                 <img src='자기소개.jpeg' />  
            </div>
            <div className='Name'>
                <h1>이청원</h1> 
                <p className='Cardinal'>49기</p>
            </div>
            <div className='Input'>
                <input onChange={handleInput} type='text'></input>
                <button onClick={handleButton}>클릭</button>
            </div>
        </div>
    
    )
}

export default Introduce