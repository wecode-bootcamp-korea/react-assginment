import React from 'react';
import "./Introduce.scss"
import { Link, useNavigate } from 'react-router-dom'; 
import ColorBox from './ColorBox'

const Introduce =()=>{
    const nav = useNavigate()
    const change =() =>{
        console.log("input 태그 동작")
    }
    const search =()=> {
        nav('/product')
    }
    const colorBox = [{
        classNm : "redBox",
        name : "이름 : red",
        rgb : "rgb : 255, 0, 0"
    },
    {
        classNm : "yellowBox",
        name : "이름 : yellow",
        rgb : "rgb : 255, 255, 0"
    },
    {
        classNm : "greenBox",
        name : "이름 : green",
        rgb : "rgb : 0, 128, 0"
    },
    {
        classNm : "blueBox",
        name : "이름 : blue",
        rgb : "rgb : 0, 0, 255"
    }]

    return(
        <div className='Introduce'>

            <div className='centerBox'>
                <div className="introduceBox">
                    <img src = "/images/cat.jpeg"/>
                    <div>
                        <p className='name'>권기완</p>
                        <p className='wecodNum'>49기</p>
                    </div>
                    <input onChange={change} type="text"/>
                    <button onClick={search} >검색</button>
                    <Link to="/product">product 페이지로 이동</Link>
                </div>
            </div>
            <div style={{display :"flex",    position: "absolute",
    top: "500px"}}>
            {/* <div className='centerBox2'>
                <div className="introduceBox">
                    <div className = "redBox">
                    </div>
                    <div>
                        <p>이름 : red</p>
                        <p>rgb : 255, 0, 0</p>
                    </div>
                </div>
            </div> */}
            <ColorBox colorBox={colorBox}/>
            
            
            

           
            </div>
        </div>
    )
}

export default Introduce