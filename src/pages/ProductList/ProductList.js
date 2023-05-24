import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    fetch("/data/catInfoList.json")
      .then((Response) => Response.json())
      .then((result) => setCatInfo(result));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {catInfo.map((catInfo) => {
          return (
            <div className="listBox">
              <img className="listImage" src="/images/cat.jpeg" alt="cat" />
              <span className="listTitle">{catInfo.name}</span>
              <span>나이 : {catInfo.age}</span>
              <span>성별 : {catInfo.gender}</span>
              <span>거주지 : {catInfo.residence}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
