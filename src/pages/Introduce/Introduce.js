import React from 'react';
import "./Introduce.scss"

const Introduce =()=>{

    const change =() =>{
        console.log("input 태그 동작")
    }
    const search =()=> {
        console.log("button 태그 동작")
    }
    return(
        <div className='introduceContainer'>   
            <div className='centerBox'>
                <div className="introduceBox">
                    <img src = "/images/cat.jpeg"/>
                    <div>
                        <p className='name'>권기완</p>
                        <p className='wecodNum'>49기</p>
                    </div>
                    <input onChange={change} type="text"/>
                    <button onClick={search} >검색</button>
                </div>
            </div>
            
        </div>
    )
}

export default Introduce