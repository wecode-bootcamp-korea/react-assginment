import React from "react";
import "./Introduce.scss";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

//모양 기억하기 한js 파일내에 컴포넌트 여러개 넣을때 쓰는 법//
// export const App= ()=> {
//   const handleInput= ()=> {
//     console.log("input 태그 동작");
//   }
//   return (
//     <div className="blank">
//     <input type="text" onChange={handleInput} />
//     </div>
      
//   );
// }



const Introduce=() => {
  const handleInput = () => {
    console.log("input 태그 동작");
  }

  const handleButton = () => {
    console.log("button 태그 동작");
  }

  const navigate = useNavigate(
  );
  const goToProduct = () => {                            // 3
    navigate('/product');
  };




  return (
    <div className="introduce">
        <div className="weCodeBox">       
          <h2>{">wecode"}</h2>
        </div>
      <div className="content">이원준</div>
      <div className="subcontent">45기</div>
      <div className="blank">
        <input type="text" onChange={handleInput} />
      </div>
      <button className="button" onClick={handleButton}>버튼</button>
      <button className="loginBtn" onClick={goToProduct}>클릭</button>
      
      <Link to='/product'> Product 페이지로 이동 </Link>
      </div>
  );
};
export default Introduce;