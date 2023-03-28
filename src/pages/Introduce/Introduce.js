import React from "react";
import {Link} from 'react-router-dom';
import "./Introduce.scss"

function Introduce () {

  function HandleInput (){
    console.log("input 태그 동작")
  };

  function HandleButton(){
    console.log("button 태그 동작")
  };

  return(
    <div className="introduce">
      <div className="profileWrap">
        <div className="profileCard">
          <div className="profileImage" alt="profile-img"></div>
          <div className="userName">
            <span className="name">최선영</span>
            <span className="thNum">44기</span>
          </div>
          <div className="commentWrap">
            <input
              className="input"
              type="text"
              placeholder="댓글"
              onChange={HandleInput}
            >
            </input>
            <button 
              className="button"
              onClick={HandleButton}
            >
              클릭
            </button>
          </div>
          <Link to="/product" className="link">▶︎ product 페이지로 이동</Link>
        </div>
      </div>
      {INTRODUCE_CARD.map((info)=>(
      <div key={info.id} className='clone-card'>
        <div className={info.name} ></div>
        <p>{info.name}</p>
        <p>{info.rgb}</p>
      </div>
    ))}
    </div>

  );
};

export default Introduce;

const INTRODUCE_CARD = [
  {id: 1, name: 'red', rgb: '225, 0, 0' },
  {id: 2, name: 'yellow', rgb: '225, 225, 0' },
  {id: 3, name: 'green', rgb: '0, 128, 0' },
  {id: 4, name: 'blue', rgb: '0, 0, 255' }
]