import React from "react";
import './Introduce.scss';


const Introduce = () => {
    const handleInput = (e) => {
        console.log('input 태그 동작')
        // console.log(e.target.value)
    }

    const handleButton = () => {
        console.log('button 태그 동작')
    }



    return(
        <div className = 'Introduce'>
            <div className = 'profileBox'>
                <img alt = 'mm' className= 'profile' src = "/images/mm.jpg" width = '300'></img>
                <h1>박현아</h1>
                <p>45기</p>
                <input className = 'txt' type ='text' onChange={handleInput} ></input>
                <input className = 'btn' type ='button' value="클릭" onClick={handleButton}></input>
            </div>
        </div>
    );
}

export default Introduce;
