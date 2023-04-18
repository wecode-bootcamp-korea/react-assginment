import ReactDOM from "react-dom/client";
import "./style/reset.scss";
import "./style/common.scss";
import "./style/variables.scss";
import "./style/mixin.scss";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
