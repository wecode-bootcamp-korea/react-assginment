import React from 'react';
import './Introduce.scss';

const clamp = '>wecode';

function handleInput() {
  console.log('input 태그 동작');
}

function handleButton(e) {
  console.log('button 태그 동작');
  e.preventDefault();
}

function Introduce() {
  return (
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
    </div>
  );
}

export default Introduce;
