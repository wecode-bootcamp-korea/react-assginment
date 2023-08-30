import React from 'react';
import './Introduce.scss';

const Introduce =()=>{


    const handleInput = () => {
            console.log("input 태그 동작")
        }

     const handleButton = () => {
            console.log("button 태그 동작")
        }

    return(
        <React.Fragment>
            <div className="bigBox">
                <div className="pictureBox">
                    <img src={`/images/다람쥐.jpg`} alt="myPicture"/>
                </div>
                <div className='name'>박인국</div>
                <div className='number'>49기</div>
                <div className='inputBox'>
                    <input type="text" className="input" onChange={handleInput}/>
                    <button className='button' onClick={handleButton}>클릭</button>
                </div>
            </div>    
        </React.Fragment>
    )
}

export default Introduce