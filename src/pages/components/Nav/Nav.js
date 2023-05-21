import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MENU_LIST } from "../../../uiData/menu";
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
          {MENU_LIST.map((menu) => {
            return (
              <Link to={menu.url} key={menu.id}>
                {menu.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;
