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
          {MENU_ITEM.map((menuItem) => (
          <Link key={menuItem.id} to={menuItem.link}>{menuItem.name}</Link>            
          ))}

        </div>
      )}
    </div>
  );
};

export default Nav;

const MENU_ITEM = [
  {id :0, link:"/", name: "메인으로 가기"},
  {id :1, link:"/review", name: "리뷰 컴포넌트 가기"},
  {id :2, link:"/count", name: "카운트 컴포넌트 가기"},
  {id :3, link:"/color", name: "컬러 컴포넌트 가기"}
]