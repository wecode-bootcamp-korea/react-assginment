import React from 'react';
import './Introduce.css';

function Introduce () {
    function handleInput() {
        console.log("input 태그 동작");
    }
    
    function handleButton() {
        console.log("button 태그 동작");
    }

    return (
        <main>
            <article>
                <img src="/images/wecode_logo.png" alt="wecode logo" className="logo"/>
                <p className="myName">손자현</p>
                <p className="description">46기</p>
                <div className="inputContainer">
                    <input 
                        type="text" 
                        className="inputBox"
                        onChange={event => handleInput()}
                    />
                    <button type="button" className="inputBtn" onClick={event => handleButton()}>클릭</button>
                </div>
            </article>
        </main>
    );
};

export default Introduce;