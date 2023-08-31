import React from 'react';
import "./introduce.css";


const Introduce = () => {
    const imageUrl = "/images/assignment.jpg" // public 폴더 하위의 이미지 경로
    function handleInput(){
        console.log("input 태그 동작");
    }
     function handleButton(){
        console.log("button 태그 동작");
    }
    return (
        <div className="fullline">
            <div>
                <img className="thumbnail" src={imageUrl} alt="cat"></img>
            </div>
            <h1 className="name">
                박지원
            </h1>

            <h2>49기</h2>
           
    

            <div className="Assignment2">
                <input className="click" type="text" name="message" placeholder="텍스트를 입력하세요"
                   onChange={handleInput}
                
                />

           
            <button onClick={handleButton}>클릭</button>

            </div>


        </div>
    )
}

export default Introduce