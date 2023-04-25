import React, {useEffect, useState} from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [ listItem, setListItem ] = useState([])
  
  useEffect(() => {
    fetch("/data/cat_info.json").then((res)=> res.json()).then((data)=> setListItem(data))
  }, [])
  
  console.log(listItem)
  return (
    <div className="productList">
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">
        {listItem.map((catInfo) => (
          <div className="listBox" key={catInfo.id}>
            <img className="listImage" src={catInfo.img} alt="cat" />
            <span className="listTitle">{catInfo.name}</span>
            <span>나이 : {catInfo.age}</span>
            <span>성별 : {catInfo.sex}</span>
            <span>거주지 : {catInfo.address}</span>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ProductList;
