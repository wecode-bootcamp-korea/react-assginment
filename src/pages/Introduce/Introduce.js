import React from 'react';
import "./Introduce.scss"

const Introduce =()=>{
    return(
        <div className='introduceContainer'>   
            <div className='centerBox'>
                <div className="introduceBox">
                    <img src = "/images/cat.jpeg"/>
                    <div>
                        <p className='name'>권기완</p>
                        <p className='wecodNum'>49기</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Introduce