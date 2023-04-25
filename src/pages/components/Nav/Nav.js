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
          {MOVE_LINK.map((info) => (
            <Link key={info.id} to={info.link}>
              {info.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;

const MOVE_LINK = [
  { id: 0, link: "/", text: "메인으로 가기" },
  { id: 1, link: "/review", text: "리뷰 컴포넌트 가기" },
  { id: 2, link: "/count", text: "카운트 컴포넌트 가기" },
  { id: 3, link: "/color", text: "컬러 컴포넌트 가기" },
];
