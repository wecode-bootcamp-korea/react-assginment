import React, { useState, useEffect } from "react";
import "./ProductList.scss";

const ProductList = () => {
    const [catInfo, setCatInfo] = useState();

    useEffect(() => {
        fetch("/data/mock-data.json")
            .then((res) => res.json())
            .then((result) => {
                console.log("result" + result);
                setCatInfo(result);
            });
    }, []);
    console.log("catInfo : " + JSON.stringify(catInfo));

    if (!catInfo) {
        return null;
    }
    return (
        <div className="productList">
            <h2 className="title">고양이 리스트</h2>
            <div className="listContainer">
                {catInfo.map((info) => (
                    <div className="listBox">
                        <img className="listImage" src={info.img} alt="cat" />
                        <span className="listTitle">{info.name}</span>
                        <span>나이 : {info.age}살</span>
                        <span>성별 : {info.gender}</span>
                        <span>거주지 : {info.address}</span>
                    </div>
                    /* <div className="listBox">
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
                    </div> */
                ))}
            </div>
        </div>
    );
};

export default ProductList;
