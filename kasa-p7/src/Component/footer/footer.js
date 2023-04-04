import React from "react";
import "./footer.css";
import Logo from "./img/LogoFooter.png";
import { Link } from "react-router-dom";

export default function footer() {
    return (
        <footer className="footer">
            <div className="dimension">
                <div className="placement">
                    <Link className="footer-link">
                        <img
                            className="footer-img"
                            src={Logo}
                            alt="logo-footer"
                        />
                    </Link>
                    <p className="footer-p">© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
