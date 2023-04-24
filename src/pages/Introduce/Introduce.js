import React from "react";
import "./Introduce.scss";
import { Link, useNavigate } from "react-router-dom";

const Introduce = () => {

    const navigate = useNavigate();

    function handleInput() {
        console.log("input 태그 동작");
      }

    function handleButton() {
        console.log("button 태그 동작");
        navigate('/product');
      }


      

    //   const goToProduct = () => {
    //     navigate('/product');
    //   }

     

    return(
        <div className="container">
            <div className="wecode">
                <div className="text">wecode</div>

            </div>
            <p className="name">오승민</p>
            <p>45기</p>
            <input type="text" onChange={handleInput}></input>
            <button onClick={handleButton}>클릭</button>
            <p>
               <Link to = "/product">product페이지로 이동</Link> 
            </p>
          
        </div>
         
    )
}

export default Introduce;