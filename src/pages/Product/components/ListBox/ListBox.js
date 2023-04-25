import React from "react";

const ListBox = ({ img, name, age, gender, residence }) => {
  return (
    <div className="listBox">
      <img className="listImage" src={img} alt="cat" />
      <span className="listTitle">{name}</span>
      <span>나이 : {age}</span>
      <span>성별 : {gender}</span>
      <span>거주지 : {residence}</span>
    </div>
  );
};

export default ListBox;
