import React, { useState } from "react";
import "./ProductList.scss";

const ProductList = () => {

  // DB
  const [productList, setproductList] = useState(null);

  // useState(() => {
  //   console.log(productList);

  // }, [productList]);
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
      <h2 className="title">고양이 리스트</h2>
      <div className="listContainer">

        {productList?.map(({ id, profileImg, name, age, sex, residence }) =>
          // console.log(`여기`, list)
          < div className="listBox" key={id} >
            <img className="listImage" src={profileImg} alt="cat" />
            <span className="listTitle">{name}</span>
            <span>나이 : {age}</span>
            <span>성별 : {sex}</span>
            <span>거주지 : {residence}</span>
          </div>
        )}


        {/* <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고냥이</span>
          <span>나이 : 14살</span>
          <span>성별 : female</span>
          <span>거주지 : 양평</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고용이</span>
          <span>나이 : 7살</span>
          <span>성별 : male</span>
          <span>거주지 : 천안</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">모울이</span>
          <span>나이 : 1살</span>
          <span>성별 : female</span>
          <span>거주지 : 부산</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">곰율이</span>
          <span>나이 : 3살</span>
          <span>성별 : male</span>
          <span>거주지 : 노원</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고울이</span>
          <span>나이 : 11살</span>
          <span>성별 : male</span>
          <span>거주지 : 평양</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">고물이</span>
          <span>나이 : 9살</span>
          <span>성별 : male</span>
          <span>거주지 : 전주</span>
        </div>
        <div className="listBox">
          <img className="listImage" src="/images/cat.jpeg" alt="cat" />
          <span className="listTitle">기양이</span>
          <span>나이 : 2살</span>
          <span>성별 : male</span>
          <span>거주지 : 충청</span>
        </div> */}

      </div>
    </div >
  );
};

export default ProductList;
