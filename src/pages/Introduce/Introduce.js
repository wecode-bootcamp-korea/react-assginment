import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Introduce.scss";

const handleInput = () => {
  console.log("input 태그 동작");
};

const Introduce = () => {
  const navigate = useNavigate();
  return (
    <div className="introduce">
      <img src="images/avatar.jpg" alt="main" />
      <p className="name">백지율</p>
      <p className="batch">46기</p>
      <div className="textInput">
        <input type={"text"} onClick={handleInput} placeholder="입력"></input>
        <button
          onClick={() => {
            navigate("/product");
          }}
        >
          클릭
        </button>
      </div>
      <Link to="/product">product 페이지로 이동</Link>
    </div>
  );
};

export default Introduce;
