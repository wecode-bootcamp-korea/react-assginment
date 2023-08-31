import React from 'react';
import './Introduce.scss';
import { Link, useNavigate } from 'react-router-dom';

const Introduce =()=>{

    const handleInput = () => {
            console.log("input 태그 동작")
        }

    //  const handleButton = () => {
    //         console.log("button 태그 동작")
    //     }

    const navigate = useNavigate();

    const navigateProduct = () => {
            navigate('/product')
    }

    return(
        <React.Fragment>
            <div className="bigBox">
                <div className="pictureBox">
                    <img src={'/images/다람쥐.jpg'} alt="myPicture"/>
                </div>
                <div className='name'>박인국</div>
                <div className='number'>49기</div>
                <div className='inputBox'>
                    <input type="text" className="input" onChange={handleInput}/>
                    <button className='button' onClick={navigateProduct}>클릭</button>
                </div>
                <Link class="link" to='/product'>product 페이지로 이동</Link>
            </div>    
        </React.Fragment>
    )
}

export default Introduce