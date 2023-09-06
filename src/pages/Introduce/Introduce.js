import React from 'react';
import "./Introduece.scss";
import { Link, useNavigate } from 'react-router-dom';


const colorList = [
    { id: 1, color: "red", code: "255, 0, 0" },
    { id: 2, color: "yellow", code: "255, 255, 0" },
    { id: 3, color: "green", code: "0, 128, 0" },
    { id: 4, color: "blue", code: "0, 0, 255" },
]



const Introduce =()=>{  

    const myFunction =()=> {
        console.log("input 태그 동작");
    };

    // const handleButton =()=> {
    //     console.log("button 태그 동작");
    // };

    const navigate = useNavigate();

    const goToProduct =()=> {     //eslint-disable-line no-unused-vars
        navigate("/Product");
    };
    
    return(
        <div className="introduce">
           <div className="introduceContainer">
           <img className="main_img" src="./images/golf-ball-red.jpg" alt="사진없음"/>
            <p className="name">김기영</p>
            <p className="group">49기</p>
            <input className="input_1" type="text" onChange={myFunction}/> 
            <button className="button_1"
            /*onClick={handleButton}*/
            onClick={goToProduct}>클릭</button>
            <p className="product_1"><Link to="/Product">product 페이지로 이동</Link></p>
            </div>
            <div className="colorContainer">
            {colorList.map((list) => {
            return (
            <div className="colorCard" key={list.id}>
                <div className={`colorBox ${list.color}`}></div>
                    <div>이름 : {list.color}</div>
                    <div>rgb : {list.code}</div>
            </div>
            );
            })}
            </div>
        </div>
    )
};

export default Introduce

