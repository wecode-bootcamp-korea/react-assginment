import React from 'react';
import './Introduce.scss'
import { Link,useNavigate } from 'react-router-dom';

const Introduce =()=>{
    const navigate = useNavigate(); 

    function handleInput(){
        console.log( "input 태그 동작")
    }
    function handleButton(){
        navigate('/product');
     }
    return(
     <div className='center'>
        <div className='bigbox'>
            <div className='myimg'>
                 <img src='자기소개.jpeg' />  
            </div>
            <div className='Name'>
                <h1>이청원</h1> 
                <p className='cardinal'>49기</p>
            </div>
            <div className='input'>
                <input onChange={handleInput} type='text'></input>
                <button onClick={handleButton}>클릭</button>
            </div>
            <Link to='/product'>product 페에지로 넘어가기</Link>;
        </div>
        </div>
    
    )
}
// 라우터.js 는 무조건적으로 인덱스.js랑 같이있어야한다.
export default Introduce