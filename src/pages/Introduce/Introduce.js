import React from "react";
import './Introduce.scss';


const Introduce = () => {
    return(
        <div className = 'Introduce'>
            <div className = 'profileBox'>
                <img alt = 'mm' className= 'profile' src = "/images/mm.jpg" width = '300'></img>
                <h1>박현아</h1>
                <p>45기</p>
            </div>
        </div>
    );
}

export default Introduce;
