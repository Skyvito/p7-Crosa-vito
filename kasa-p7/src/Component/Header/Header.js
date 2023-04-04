import React from "react";
import "./Header.css";
import Logo from "./Img/Logo.png";
import { Link, NavLink } from "react-router-dom";

export default function HeaderDesktop() {
    return (
        <header className="header">
            <div className="header-div">
                <h1>
                    <Link to="/">
                        <img className="logo" src={Logo} alt="Logo de Kasa" />
                    </Link>
                </h1>
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "activeLink" : "desactiveLink"
                                }
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/propos"
                                className={({ isActive }) =>
                                    isActive ? "activeLink" : "desactiveLink"
                                }
                            >
                                A Propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
