import React, { useState } from "react";
import "./ProductList.scss";

const ProductList = () => {

  // DB
  const [productList, setproductList] = useState(null);

  // 동작
  useState(() =>
    fetch(`/data/ProductList.json`)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => setproductList(res))
    , []
  );

  // 출력
  return (
    <div className="productList">

      {productList ?
        <>
          <h2 className="title">고양이 리스트</h2>
          <div className="listContainer">

            {productList.map(({ id, profileImg, name, age, sex, residence }) =>
              < div className="listBox" key={id} >
                <img className="listImage" src={profileImg} alt="cat" />
                <span className="listTitle">{name}</span>
                <span>나이 : {age}</span>
                <span>성별 : {sex}</span>
                <span>거주지 : {residence}</span>
              </div>
            )}
          </div>
        </>
        :
        `로딩중`
      }

    </div >
  );
};

export default ProductList;
