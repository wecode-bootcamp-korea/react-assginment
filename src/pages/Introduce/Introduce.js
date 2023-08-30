import React from 'react';
import './Introduce.scss';

const Introduce =()=>{
    return(
        <React.Fragment>
            <div className="bigBox">
                <div className="pictureBox">
                    <img src={`/images/다람쥐.jpg`} alt="myPicture"/>
                </div>
                <div className='name'>박인국</div>
                <div className='number'>49기</div>
            </div>    
        </React.Fragment>
    )
}

export default Introduce