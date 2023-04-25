import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
          {menuList.map((menu) => (
            <Link to={menu.goTo}>{menu.title}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;

const menuList = [
  { id: 1, goTo: "/", title: "메인으로 가기" },
  { id: 2, goTo: "/review", title: "리뷰 컴포넌트 가기" },
  { id: 3, goTo: "/count", title: "카운트 컴포넌트 가기" },
  { id: 4, goTo: "/color", title: "컬러 컴포넌트 가기" },
];
