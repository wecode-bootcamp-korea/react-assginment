import React , {useState} from "react";
import "./Color.scss";
import "./ColorButton/ColorButton";
import ColorButton from "./ColorButton/ColorButton";

const Color = () => {

  const [color, setColor] = useState("white");

  const colorHandlerChange=(e)=>{
    setColor(e);
  }

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={`selected ${color}`} />
        {color}
      </span>
      <div className="colorHandler">
        {/* <button
          className="colorButton white"
          onClick={() => setColor("white")}
        />
        <button className="colorButton red" onClick={() => setColor("red")} />
        <button
          className="colorButton yellow"  onClick={() => setColor("yellow")}
        /> */}

        <ColorButton color="white" colorHandlerChange={()=>colorHandlerChange("white")} />
        <ColorButton color="red" colorHandlerChange={()=>colorHandlerChange("red")}/>
        <ColorButton color="yellow" colorHandlerChange={()=>colorHandlerChange("yellow")}/>

      </div>
    </div>
  );
};


//   const [color, setColor] = useState('white');

//   const changeColor=(event)=>{
//     setColor(event.target.color);
//   };
  

//   return (
//     <div className="color">
//       <span className="colorText">
//         색상 : {color}
//         <button className={setColor} />
//       </span>
//       <div className="selectedBox">
//         <div className="colorButton">
          
//         <ColorButton color="white" onClick={changeColor}/>
//         <ColorButton color="red" onClick={changeColor}/>
//         <ColorButton color="yellow" onClick={changeColor}/>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Color;
