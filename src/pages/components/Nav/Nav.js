import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import {MENU_LIST} from
import "./Nav.scss";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  return (
    <div className="nav">
      <div
        className="icon"
        onClick={() => {
          setIsOpenMenu((prev) => !prev);
        }}
      >
        메뉴
      </div>
      {isOpenMenu && (
        <div className="menuBox">
          {MENU_LIST.map((info) => (
            <Link to={info.to} key={info.id}>
              {info.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MENU_LIST = [
  { id: 1, to: "/", text: "메인으로 가기" },
  { id: 2, to: "/review", text: "리뷰 컴포넌트 가기" },
  { id: 3, to: "/count", text: "카운트 컴포넌트 가기" },
  { id: 4, to: "/color", text: "컬러 컴포넌트 가기" },
];

export default Nav;
