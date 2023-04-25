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
          {MENU_LIST.map((menuList) => (
            <Link key={menuList.id} to={menuList.way}>
              {menuList.menuName}
            </Link>
          ))}

          {/* <Link to="/">메인으로 가기</Link>
          <Link to="/review">리뷰 컴포넌트 가기</Link>
          <Link to="/count">카운트 컴포넌트 가기</Link>
          <Link to="/color">컬러 컴포넌트 가기</Link> */}
        </div>
      )}
    </div>
  );
};
export default Nav;

const MENU_LIST = [
  { id: 1, way: "/", menuName: "메인으로 가기" },
  { id: 2, way: "review", menuName: "리뷰 컴포넌트 가기" },
  { id: 3, way: "/count", menuName: "카운트 컴포넌트 가기" },
  { id: 4, way: "/color", menuName: "컬러 컴포넌트 가기" },
];
