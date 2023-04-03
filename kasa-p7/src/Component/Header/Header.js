import React from "react";
import "./Header.css";
import Logo from "./Img/Logo.png";
import { Link } from "react-router-dom";

export default function HeaderDesktop() {
    return (
        <header className="header">
            <h1>
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo de Kasa" />
                </Link>
            </h1>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link className="items" to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link className="items" to="/propos">
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
