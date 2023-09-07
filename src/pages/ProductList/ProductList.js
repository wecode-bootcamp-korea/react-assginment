import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [inf, setInf] = useState();

  useEffect(() => {
    fetch("/data/listdata.json")
      .then((response) => response.json()) //읽어온 데이터를 json으로 변환
      .then((json) => {
        setInf(json);
      });
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {inf?.map((info) => (
          <div key={info.이름} className="listBox">
            <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            <span className="listTitle">{info.이름}</span>
            <span>나이 : {info.나이}살</span>
            <span>성별 : {info.성별}</span>
            <span>거주지 : {info.거주지}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
// {USER_INFO_LIST.map((info) => (
//   <div key={info.id} className="colorCard">
//     <div
//       className="colorImg"
//       style={{ backgroundColor: info.color }}
//     ></div>
//     <div className="colorName">이름 : {info.name}</div>
//     <div className="colorRgb">rgb : {info.rgb}</div>
//   </div>
// ))}
