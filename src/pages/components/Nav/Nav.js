import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  const menuList = [
    { id: 1, Link: "/", text: "메인으로 가기"},
    { id: 2, Link: "/review", text: "리뷰 컴포넌트 가기"},
    { id: 3, Link: "/count", text: "카운트 컴포넌트 가기"},
    { id: 4, Link: "/color", text: "컬러 컴포넌트 가기"},
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
        {menuList.map((List) => {
            return (
              <Link key={List.id} to={List.Link}>
                {List.text}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;
