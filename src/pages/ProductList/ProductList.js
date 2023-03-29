import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {

  const [ catsData, setCatsData] = useState([]);

  useEffect(()=>{
    fetch("/data/cat.json")
      .then(response => response.json())
      .then(result => setCatsData(result));
  },[])  

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      {/* <div className="listContainer"> */}
      <div className="listContainer" >
        {catsData.map(cat=>(
              <div className="listBox" key={cat.id} >
                <img className="listImage" src="/images/cat.jpeg" alt="cat" />
                <span className="listTitle"> {cat.name} </span>
                <span>나이 : {cat.age} 살</span>
                <span>성별 : {cat.gender}</span>
                <span>거주지 : {cat.address}</span>
              </div>
          ))}
      </div>
    </div>
    // </div>
  );
};

export default ProductList;