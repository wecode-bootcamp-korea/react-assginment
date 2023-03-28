import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    fetch("/data/profile.json")
      .then((response) => response.json())
      .then((result) => setProfileList(result));
  }, []);

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {profileList.map((list) => {
          return (
            <div className="listBox">
              <img className="listImage" src="/images/cat.jpeg" alt="cat" />
              <span className="listTitle">{list.listTitle}</span>
              <span>나이 : {list.age}</span>
              <span>성별 : {list.gender}</span>
              <span>거주지 : {list.location}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
