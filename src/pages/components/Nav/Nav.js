import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname])


const MENU_LIST = [
  {
    id: "menu1", 
    path: "/", 
    content: "메인으로 가기"
  },
  {
    id: "menu2", 
    path: "/review", 
    content: "리뷰 컴포넌트 가기", 
    // props: ["review", "setReview", "text", "setText"],
  },
  {
    id: "menu3", 
    path: "/count", 
    content: "카운트 컴포넌트 가기",
  },
  {
    id: "menu4", 
    path: "/color", 
    content: "컬러 컴포넌트 가기",
    // props: ["color", "setColor"],
  },
]

  // let PROPS_ARRAY = [];
  // for (let i = 0; i < MENU_LIST.length; i++) {
  //   PROPS_ARRAY = MENU_LIST[i].props;    
  // }
  
  // PROPS_ARRAY.map((prop) => {
  //   console.log(prop)
  // })

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
                <Link key={menu.id} to={menu.path} 
                >
                  {menu.content}
                </Link>
              )
            })
          }
        </div>
      )}
    </div>
  );
};

export default Nav;
