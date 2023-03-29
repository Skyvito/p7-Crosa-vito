import React from "react";
import "./HeaderDesktop.css";
import Logo from "./Img/Logo.png";

export default function HeaderDesktop() {
    return (
        <header className="header">
            <h1>
            <a href="#"><img className="logo" src={Logo} alt="Logo de Kasa" /></a>
            </h1>
            <nav className="navbar">
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
    );
}
