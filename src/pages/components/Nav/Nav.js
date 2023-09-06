import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const menuData = [
  { id: 0, to: "/", value: "메인으로 가기" },
  { id: 1, to: "/review", value: "리뷰 컴포넌트 가기" },
  { id: 2, to: "/count", value: "카운트 컴포넌트 가기" },
  { id: 3, to: "/color", value: "컬러 컴포넌트 가기" },
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
          {menuData?.map((data) => {
            return (
              <Link key={data.id} to={data.to}>
                {data.value}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;
