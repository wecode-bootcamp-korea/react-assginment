import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';

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
          {MENU_LIST.map((menuList) => {
            return (
              <Link key={menuList.menu} to={menuList.link}>
                {menuList.menu}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;

const MENU_LIST = [
  { link: '/', menu: '메인으로 가기' },
  { link: '/review', menu: '리뷰 컴포넌트 가기' },
  { link: '/count', menu: '카운트 컴포넌트 가기' },
  { link: '/color', menu: '컬러 컴포넌트 가기' },
];
