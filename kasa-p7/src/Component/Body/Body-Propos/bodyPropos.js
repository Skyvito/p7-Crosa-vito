import React from "react";
import Fond from "./Image/montagne.png";
import "../Body.css";

export default function bodyPropos() {
    return (
        <div className="Body">
            <section className="header-bodyMontagne">
                <img
                    className="fond-montagnesPropos"
                    src={Fond}
                    alt="fond-montagnes"
                />
                <div className="ombre-montagnePropos"> </div>
            </section>
        </div>
    );
}
