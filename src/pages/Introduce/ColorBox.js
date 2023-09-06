import React from 'react';
import "./Introduce.scss"
import { Link, useNavigate } from 'react-router-dom'; 

const ColorBox =(props)=>{


    return(
        <>{/* <div className='centerBox2'>
        <div className="introduceBox">
            <div className = "redBox">
            </div>
            <div>
                <p>이름 : red</p>
                <p>rgb : 255, 0, 0</p>
            </div>
        </div>
    </div> */}
    {props.colorBox.map((div) => {
        return <div className='centerBox2'>
        <div className="introduceBox">
            <div className = {div.classNm}>
            </div>
            <div>
                <p>{div.name}</p>
                <p>{div.rgb}</p>
            </div>
        </div>
    </div>
    })}
    </>
            
          
            
            
            

           
            
    )
}

export default ColorBox