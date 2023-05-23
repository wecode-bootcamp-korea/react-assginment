import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/dataProductList.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {data.map((data) => {
          return (
            <div className="listBox" key={data.id}>
              <img className="listImage" src={`${data.img}`} alt="cat" />
              <span className="listTitle">{data.name}</span>
              <span>나이 : {data.age}</span>
              <span>성별 : {data.gender}</span>
              <span>거주지 : {data.address}</span>
            </div>
            // <div className="listBox">
            //   <img className="listImage" src="/images/cat.jpeg" alt="cat" />
            //   <span className="listTitle">기양이</span>
            //   <span>나이 : 2살</span>
            //   <span>성별 : male</span>
            //   <span>거주지 : 충청</span>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
