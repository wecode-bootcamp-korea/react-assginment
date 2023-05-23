import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();
  const MENU_LIST = [
    { id: "/", menuName: "메인으로 가기" },
    { id: "/review", menuName: "리뷰 컴포넌트 가기" },
    { id: "/count", menuName: "카운트 컴포넌트 가기" },
    { id: "/color", menuName: "컬러 컴포넌트 가기" },
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
          {MENU_LIST.map((menuList) => {
            return (
              <Link key={menuList.id} to={menuList.id}>
                {menuList.menuName}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;
