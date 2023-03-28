import React, {useEffect, useState} from "react";
import "./ProductList.scss";

const ProductList = () => {

  const [catUser, setCatUser] = useState([]);

  useEffect(()=>{
    fetch('/data/userdata.json')
      .then((response) => response.json())
      .then((userList) => setCatUser(userList))
  },[])

  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {
          catUser && catUser.map(function(cat){
            return(
              <div className="listBox" key={cat.id}>
                <img className="listImage" src="/images/cat.jpeg" alt="cat" />
                <span className="listTitle">{cat.name}</span>
                <span>나이 : {cat.age}살</span>
                <span>성별 : {cat.gender}</span>
                <span>거주지 : {cat.location}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProductList;
