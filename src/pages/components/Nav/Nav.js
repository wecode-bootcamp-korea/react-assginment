import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const location = useLocation();

    const MENUBOX = [
        { path: "/", text: "메인으로 가기" },
        { path: "/review", text: "리뷰 컴포넌트 가기" },
        { path: "/count", text: "카운트 컴포넌트 가기" },
        { path: "/color", text: "컬러 컴포넌트 가기" },
    ];

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
                    {MENUBOX.map((menu) => (
                        <Link to={menu.path} key={menu.text}>
                            {menu.text}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Nav;
