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
          {/* <Link to="/">메인으로 가기</Link>
          <Link to="/review">리뷰 컴포넌트 가기</Link>
          <Link to="/count">카운트 컴포넌트 가기</Link>
          <Link to="/color">컬러 컴포넌트 가기</Link>
           */}

          {LINK_INFO_LIST.map((info) => (
            <Link to={info.link} key={info.id}>
              {info.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;

const LINK_INFO_LIST = [
  { id: 1, link: "/", text: "메인으로 가기" },
  { id: 2, link: "/review", text: "리뷰 컴포넌트 가기" },
  { id: 3, link: "/count", text: "카운트 컴포넌트 가기" },
  { id: 4, link: "/color", text: "컬러 컴포넌트 가기" },
];
