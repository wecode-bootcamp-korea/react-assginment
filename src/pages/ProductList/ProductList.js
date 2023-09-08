import React, { useEffect, useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
    const [catList, setCatList] = useState([]);

    useEffect(() => {
        fetch("/data/productListMock.json", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setCatList(data);
            });
    }, []);

    return (
        <div className="productList">
            <h2 className="title">고양이 리스트</h2>
            <div className="listContainer">
                {catList.map((item) => {
                    return (
                        <div key={item.id} className="listBox">
                            <img
                                className="listImage"
                                src={item.img}
                                alt={item.name}
                            />
                            <span className="listTitle">{item.name}</span>
                            <span>나이 : {item.age}</span>
                            <span>성별 : {item.gender}</span>
                            <span>거주지 : {item.residence}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
