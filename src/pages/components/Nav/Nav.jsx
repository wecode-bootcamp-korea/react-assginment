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
      {isOpenMenu ? (
        <div className="menuBox">
          {TOP_MENU.map(({ id, link, text }) => <Link id={id} to={link}>{text}</Link>)}
        </div>
      ) : null}
    </div>
  );
};

const TOP_MENU = [
  { id: 1, link: `/`, text: `메인으로 가기` },
  { id: 2, link: `/product`, text: `제품 컴포넌트 가기` },
  { id: 3, link: `/productList`, text: `목록 컴포넌트 가기` },
  { id: 4, link: `/review`, text: `리뷰 가기` },
  { id: 5, link: `/count`, text: `카운트 가기` },
  { id: 5, link: `/color`, text: `컬러 가기` },
];

export default Nav;
