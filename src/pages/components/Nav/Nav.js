import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const LIST = [
  { urlName: "/", text: "메인으로 가기" },
  { urlName: "/review", text: "리뷰 컴포넌트 가기" },
  { urlName: "/count", text: "카운트 컴포넌트 가기" },
  { urlName: "/color", text: "컬러 컴포넌트 가기" },
];

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
          {LIST.map((list) => {
            return (
              <Link key={list.urlName} to={list.urlName}>
                {list.text}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;
