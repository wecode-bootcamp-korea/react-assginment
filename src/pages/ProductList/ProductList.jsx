import React from "react";
import "./ProductList.scss";
import useFetch from "../../hooks/useFetch";

const ProductList = () => {

  // 변수
  const productList = useFetch(`/data/ProductList.json`);

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
