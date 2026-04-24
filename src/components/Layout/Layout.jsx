import "./Layout.css";
import lightIcon from "../../assets/light_mode.svg";
import darkIcon from "../../assets/dark_mode.svg";
import arrowDownIcon from "../../assets/arrow_downd.svg";
import closeIcon from "../../assets/close.svg";

import { useEffect, useRef, useState } from "react";
import { useShow } from "../../hooks/globals/useShow.js";
import { ThemContext } from "../../hooks/globals/useContext.js";
import { Outlet } from "react-router-dom";
import { CustomLink } from "../Navigation/CustomLink.jsx";

const THEME_KEY = "portfolio-theme";

const NAV_ITEMS = [
    { path: "", name: "Accueil" },
    { path: "about", name: "A propos" },
    { path: "projects", name: "Projets" },
    { path: "blog", name: "Blog" },
];

export function Layout() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "light";
        return localStorage.getItem(THEME_KEY) || "light";
    });
    const { show, setShow } = useShow(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const fullYear = new Date().getFullYear();

    useEffect(() => {
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setShow(false);
            }
        };

        document.body.addEventListener("click", handleClickOutside);
        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, [setShow]);

    const handleTheme = () => {
        setTheme((mode) => (mode === "light" ? "dark" : "light"));
    };

    const handleShow = () => setShow(false);

    return (
        <div className={theme === "light" ? "layout-container" : "layout-container dark"}>
            <ThemContext value={theme}>
                <header className="header-container">
                    <div className="header-inner">
                        <div
                            ref={buttonRef}
                            className="menu-btn"
                            onClick={() => setShow((s) => !s)}
                        >
                            <span>Menu</span>
                            <img src={arrowDownIcon} alt="" />
                        </div>

                        <nav className="menu-desk">
                            <ul className="menu-items-desk">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.name}>
                                        <CustomLink path={item.path} name={item.name} />
                                    </li>
                                ))}
                                <li className="mode-item">
                                    <button
                                        type="button"
                                        className="mode mode-inline"
                                        onClick={handleTheme}
                                        aria-label="Basculer le thème"
                                    >
                                        {theme === "light" ? (
                                            <img src={darkIcon} alt="" />
                                        ) : (
                                            <img src={lightIcon} alt="" />
                                        )}
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <button
                            type="button"
                            className="mode mode-mobile"
                            onClick={handleTheme}
                            aria-label="Basculer le thème"
                        >
                            {theme === "light" ? (
                                <img src={darkIcon} alt="" />
                            ) : (
                                <img src={lightIcon} alt="" />
                            )}
                        </button>

                        {show && (
                            <div ref={menuRef} className="menu-container">
                                <nav className="menu">
                                    <ul className="menu-items">
                                        <li className="navigation">
                                            <span>Navigation</span>
                                            <img
                                                onClick={handleShow}
                                                src={closeIcon}
                                                alt="Fermer"
                                            />
                                        </li>
                                        {NAV_ITEMS.map((item) => (
                                            <li key={item.name} onClick={handleShow}>
                                                <CustomLink path={item.path} name={item.name} />
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                </header>

                <main className="main-container">
                    <div className="main-inner">
                        <Outlet />
                    </div>
                </main>

                <footer className="footer">
                    <div className="footer-container">
                        <nav className="footer-nav">
                            <ul className="footer-links">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.name}>
                                        <CustomLink path={item.path} name={item.name} />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <p className="right">
                            &copy; {fullYear} Kamate Drissa.{" "}
                            <span className="mention">Tous droits réservés.</span>
                        </p>
                    </div>
                </footer>
            </ThemContext>
        </div>
    );
}
