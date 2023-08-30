import React from 'react';
import "./Introduce.css";

const Introduce =()=>{
    return(
        <div className="flex">
        <section className="introduce-item">
            <div>
                <img className="image" src="images/1000.jpg" alt="내사진" />
            </div>
            <div>
                <span className="name">이주은</span>
            </div>
            <div>
                <span className="number">49기</span>
            </div>
            </section>
        </div>
    )
}

export default Introduce