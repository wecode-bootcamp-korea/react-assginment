import React from "react";
import "./Count.scss";

const Count = ({ productList, setProductList }) => {
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            if (productList[0] && productList[0].count > 1) {
              setProductList(productList[0].count - 1);
            }
          }}
        >
          -
        </button>
        <div className="countInputText">
          {/* {productList[0] && productList[0].count} */}
        </div>
        <button onClick={() => setProductList(productList[0].count + 1)}>
          +
        </button>
      </div>
      <button
        className="resetBtn"
        // onClick={() => setProductList((productList[0].count = 1))}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
