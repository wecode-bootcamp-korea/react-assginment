import React from "react";
import "./Introduce.scss";
import { Link , useNavigate } from "react-router-dom";


const Introduce = () => {

   const navigate = useNavigate();

   const goToProduct = () => {
      navigate('/product');
   }

   return(
      <>
      <p>오승민</p>
      <p>45기</p>
      <input/>
      <button onClick={goToProduct}>클릭</button>
      <div>
      <Link to ="/product">product 페이지로 이동</Link>
      </div>
      

      </>
      
   )
   
}

export default Introduce;


