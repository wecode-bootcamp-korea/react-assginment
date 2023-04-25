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
          {MENU_LIST.map((menu) => {
            return (
              <Link key={menu.id} to={menu.src}>
                {menu.text}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;

const MENU_LIST = [
  { id: 1, src: "/", text: "메인으로 가기" },
  { id: 2, src: "/review", text: "리뷰 컴포넌트 가기" },
  { id: 3, src: "/count", text: "카운트 컴포넌트 가기" },
  { id: 4, src: "/color", text: "컬러 컴포넌트 가기" },
];
