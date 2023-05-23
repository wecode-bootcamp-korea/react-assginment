import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";
import NAV_INFO_LIST from "./NavData";

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
          {NAV_INFO_LIST.map((info) => (
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
