import React from "react";
import titleImage from "../../assets/src/images/images.png";

const Introduce =()=> {


return (
    <>
    <div className="introduce">
        <div className="cardcontainer">
        <img src={titleImage} alt="main" className="mainImage" />
        <p className="name">옥준우</p>
        <p className="number">46기</p>
        </div></div>
        </>
);

}

export default Introduce;