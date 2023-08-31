import React from 'react';
import "./Introduce.scss"
import { Link, useNavigate } from 'react-router-dom'; 

const Introduce =()=>{
    const nav = useNavigate()
    const change =() =>{
        console.log("input 태그 동작")
    }
    const search =()=> {
        nav('/product')
    }
    return(
        <div className='Introduce'>   
            <div className='centerBox'>
                <div className="introduceBox">
                    <img src = "/images/cat.jpeg"/>
                    <div>
                        <p className='name'>권기완</p>
                        <p className='wecodNum'>49기</p>
                    </div>
                    <input onChange={change} type="text"/>
                    <button onClick={search} >검색</button>
                    <Link to="/product">product 페이지로 이동</Link>
                </div>
            </div>
        </div>
    )
}

export default Introduce