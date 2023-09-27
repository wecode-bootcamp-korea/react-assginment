import React, { useState } from 'react';
import "./introduce.scss";
import mainImg from "../../assets/img/yojin.jpg";
import { useNavigate, Link } from "react-router-dom";

const ColorCard = [
    { id : 1 , name : 'red' , rgb : 'rgb(255, 0, 0)' },
    { id : 2 , name : 'yellow' , rgb : 'rgb(255, 255, 0)' },
    { id : 3 , name : 'green' , rgb : 'rgb(0, 128, 0)' },
    { id : 4 , name : 'blue' , rgb : 'rgb(0, 0, 255)' },
]

console.log(ColorCard)

const Introduce = () => {

    // const [ input, setInput ] = useState('');
    // const [ button, setButton ] = useState('');

    const navigator = useNavigate();
    
    const handleInput = () => {
        console.log("input 태그 동작");
    }

    const handleButton = () => {
        navigator("/product");
    }

    return(
        <>
        <div className="container">
            
            <div className="imgBox">
                <img src={mainImg} alt="img" className="Img"/>
            </div> 

            <div className="profile">
                <h1>박요진</h1>
                <p>49기</p>
            </div>

            <div className='event'>
                <input type='text' id="input" onChange={handleInput}></input>
                <button onClick={handleButton}>클릭</button>
                <Link to='./product'>product 페이지로 이동!</Link>
            </div>




            {/* {imgCard.map((card)=> {
                return (
                    <div className="card" key={card.id}>
                        
                    </div>
                )
            })} */}
            
        </div>

        <div className='colorCard'>
            {
            ColorCard.map((card) => {
            return (
            
                <div className="colorCardBox">
                    <div className="cardBox" style={{background:card.rgb}}></div>
                    <div className="colorBoxInfo">
                        <h4>{card.name}</h4>
                        <p>{card.rgb}</p>
                    </div>
                </div>
            
            )
            })
            }
            </div>     


</>

    )
}

export default Introduce