import "./Layout.css";
import lightIcon from "../../assets/light_mode.svg";
import darkIcon from "../../assets/dark_mode.svg";
import arrowDownIcon from "../../assets/arrow_downd.svg";
import closeIcon from "../../assets/close.svg";

import { useEffect, useRef, useState} from "react";
import { useShow } from "../../hooks/globals/useShow.js";
import { ThemContext } from "../../hooks/globals/useContext.js";
import { Outlet} from "react-router-dom";
import {CustomLink} from "../Navigation/CustomLink.jsx";


export function Layout() {
    const [theme, setTheme] = useState('light')
    const { show, setShow } = useShow(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const full_year = new Date().getFullYear()


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
    }, [show]);

    const handleTheme = () => {
        setTheme(mode => mode === 'light' ? 'dark' : 'light')
    }

    const handleShow = () => {
        setShow(false)
    }


    return (
        <div className={theme === 'light' ? 'layout-container' : 'layout-container dark'} >
            <ThemContext value={theme}>
                <header className="header-container">
                    <div
                        ref={buttonRef}
                        className="menu-btn"
                        onClick={() => setShow((s) => !s)}
                    >
                        <span>Menu</span>
                        <img src={arrowDownIcon} alt="Arrow down icon"/>
                    </div>
                    <div className="empty">

                    </div>

                    {/* MENU DESKTOP*/}
                    <div className={theme === "light" ? "menu-container-desk" : "menu-container-desk dark"}>
                        <nav className="menu-desk">
                            <ul className="menu-items-desk">
                                <CustomLink path="" name="Home"/>
                                <CustomLink path="about" name="A propos"/>
                                 <CustomLink path="projects" name="Projets"/>
                                <CustomLink path="blog" name="Blog"/>
                            </ul>
                        </nav>
                    </div>

                    <div className="mode" onClick={handleTheme}>
                        {theme === "light" ? (
                            <img src={darkIcon} alt="Dark mode icon"/>
                        ) : (
                            <img src={lightIcon} alt="Light mode icon"/>
                        )}
                    </div>

                    {/* MENU MOBILE*/}
                    {show && (
                        <div
                            ref={menuRef}
                            className={theme === "light" ? "menu-container" : "menu-container dark"}
                        >
                            <nav className="menu">
                                <ul className="menu-items">
                                    <li className="navigation">
                                        <span>Navigation</span>
                                        <img
                                            onClick={handleShow}
                                            src={closeIcon}
                                            alt="Close icon"
                                        />
                                    </li>
                                    <li onClick={handleShow}><CustomLink path="" name="Home"/></li>
                                    <li onClick={handleShow}><CustomLink path="about" name="A propos"/></li>
                                    <li onClick={handleShow}><CustomLink path="projects" name="Projets"/></li>
                                    <li onClick={handleShow}><CustomLink path="blog" name="Blog"/></li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </header>
                <main className="main-container">
                    <Outlet/>
                </main>

                <footer className="footer">
                    <div className="footer-container">
                        <nav className="footer-nav">
                            <ul className="footer-links">
                                <li><CustomLink path="" name="Home"/></li>
                                <li><CustomLink path="about" name="A propos"/></li>
                                <li><CustomLink path="projects" name="Projets"/></li>
                                <li><CustomLink path="blog" name="Blog"/></li>
                            </ul>
                        </nav>
                        <p className="right">
                            &copy; {full_year} Kamate Drissa. <span className="mention">Tous droit réservé</span>
                        </p>
                    </div>
                </footer>
            </ThemContext>
        </div>

    );


}
