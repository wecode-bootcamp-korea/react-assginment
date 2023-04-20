import React, {useState} from "react";
import "./Color.scss";


const Color = () => {

  //color 는 값의 변수명?//동적으로 관리하고자 하는 상태값 , setColor 는 색을 바꾸라는 함수 자리.//첫 번째 요소인 상태값을 업데이트하는 함수. 
  //[state, setState]
  const [color, setColor] = useState('white');
  

  //retun 안에 <h1 style={{ backgroundColor: color }}>여기는 메인페이지입니다.</h1> 이런식으로 사용하면 됌 
  //<button onClick={() => setColor('blue')}>색상 바꾸기</button> 이렇게 하면 버튼을 눌렀을 때 파란색으로 변경.
  return (
    <div className="color">
      <span className="colorText">
        색상 : {color}
        <div className={`selected ${color}`} /> 
    
      </span>
      <div className="colorHandler">
        <button className="colorButton white" onClick={() => setColor('white')} />
        <button className="colorButton red" onClick={() => {setColor('red')}} />
        <button className="colorButton yellow" onClick={() => {setColor('yellow')}} />
      </div>
    </div>
  );
};
//<div className={`selected ${color}`} /> 
//  <button className="colorButton white" onClick={handleButtonClick} style={{ backgroundColor: color, color: 'black' }}/>

export default Color;

// selected 자리를 ``안에 변수명을 들어가게 바꿔서 scss 속성을 부여하라
//과제 3-1
/*useState를 선언합니다.
선언한 state에는 color의 이름이 문자열로 관리 되어야 합니다.*/
//colorHandler 자식으로 있는 버튼을 누를 때마다 각 색상의 이름과 색이 표현되도록 구현해주세요!
