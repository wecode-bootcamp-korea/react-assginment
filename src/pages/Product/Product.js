import React, { useState, useEffect } from "react";
// import Color from "./components/Color/Color";
// import ColorButton from "./components/ColorButton/ColorButton";
// import Count from "./components/Count/Count";
// import Review from "./components/Review/Review";
import ProductInfo from "./ProductInfo";
import "./Product.scss";

const Product = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(1);
  const [productArr, setProductArr] = useState([]);

  useEffect(() => {
    fetch("/data/productData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductArr(data);

        setCount(data.count);
        console.log(data.count);
      });
  }, []);

  // const price = 300;
  // const totalPrice = price * count;

  return (
    <div className="product">
      {productArr.map((info) => {
        console.log("render!");
        console.log(info.count);
        console.log("render!11");
        // setCount(info.count);

        return (
          <ProductInfo
            key={info.id}
            img={info.img}
            title={info.title}
            price={info.price}
            count={count} //////
            review={info.review}
            color={color}
            setColor={setColor}
            setCount={setCount}
          />
        );
      })}
    </div>
  );
};

export default Product;
