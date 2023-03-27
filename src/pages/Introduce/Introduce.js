import React from 'react';
import './Introduce.scss';
import { Link, useNavigate } from 'react-router-dom';

function ColorBox({ content }) {
  return (
    <div className="colorBox">
      <div className={content.classname} />
      <p>이름 : {content.colorName}</p>
      <p>rgb : {content.rgb}</p>
    </div>
  );
}

function Introduce() {
  const clamp = '>wecode';

  const Navigate = useNavigate();

  function handleInput() {
    console.log('input 태그 동작');
  }

  function handleButton(e) {
    console.log('button 태그 동작');
    Navigate('/product');
    e.preventDefault();
  }

  return (
    <>
      <div className="introduce">
        <div className="blackBox">
          <div className="rogo">{clamp}</div>
        </div>
        <h1>김영운</h1>
        <h2>44기</h2>
        <form>
          <input onChange={handleInput} />
          <button onClick={handleButton}>클릭</button>
        </form>
        <Link className="link" to="/product">
          product 페이지로 이동
        </Link>
      </div>
      <div className="colorBoxWrap">
        {COLOR_BOX_CONTENT.map((content) => {
          return <ColorBox content={content} />;
        })}
      </div>
    </>
  );
}

export default Introduce;

const COLOR_BOX_CONTENT = [
  { colorName: 'red', rgb: '255, 0, 0', classname: 'redBox' },
  { colorName: 'yellow', rgb: '255, 255, 0', classname: 'yellowBox' },
  { colorName: 'green', rgb: '0, 128, 0', classname: 'greenBox' },
  { colorName: 'blue', rgb: '0, 0, 255', classname: 'blueBox' },
];
