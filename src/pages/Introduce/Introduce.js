import React from "react";
import "./Introduce.css";



const IntroduceName = () => {
    const logoname = "> wecode"
    return (
        <div className="body">
            <div className="container">
              <div className="logobox">
                <span>{logoname}</span>
              </div>
              <span className="name">박지연</span>
              <span className="class">44기</span>
            </div>
        </div>
    );
}

export default IntroduceName;