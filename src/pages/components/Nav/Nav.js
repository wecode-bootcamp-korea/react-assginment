import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  const MENU_DATA = [
    { id: 1, menuName: "메인으로 가기", link: "/" },
    { id: 2, menuName: "리뷰 컴포넌트 가기", link: "/review" },
    { id: 3, menuName: "카운트 컴포넌트 가기", link: "/count" },
    { id: 4, menuName: "컬러 컴포넌트 가기", link: "/color" },
  ];

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
          {/* <Link to="/">메인으로 가기</Link>
          <Link to="/review">리뷰 컴포넌트 가기</Link>
          <Link to="/count">카운트 컴포넌트 가기</Link>
          <Link to="/color">컬러 컴포넌트 가기</Link> */}
          {MENU_DATA.map((menuList) => {
            return <Link to={`${menuList.link}`}>{menuList.menuName}</Link>;
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;
