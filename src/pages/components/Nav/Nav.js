import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
          <ul>
            {NAV_INFO_LIST.map((info) => (
              <div key={info.id}>
                <a href={info.link}>{info.text}</a>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;

const NAV_INFO_LIST = [
  { id: 1, link: "/", text: "메인으로 가기" },
  { id: 2, link: "/review", text: "리뷰로 가기" },
  { id: 3, link: "/count", text: "카운트로 가기" },
  { id: 4, link: "/color", text: "칼라로 가기" },
];
