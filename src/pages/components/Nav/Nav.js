import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_MENU } from "./Data";
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
          { NAV_MENU.map((element)=>{
            return(<Link to={element.link} key={element.id}>{element.text}</Link>)
          }) }
        </div>
      )}
    </div>
  );
};

export default Nav;