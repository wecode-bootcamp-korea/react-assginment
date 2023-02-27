import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./style/common.scss";
import "../../style/common.scss"; //common 과 reset은
import "../../style/reset.scss"; //모든 페이지에 적용되어야 함

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
