import React from "react";
import Fond from "./Image/montagne.png";
import "../Body.css";

export default function bodyPropos() {
    return (
        <div className="Body">
            <section className="header-body">
                <img
                    className="fond-montagnes"
                    src={Fond}
                    alt="fond-montagnes"
                />
                <div className="ombre"> </div>
            </section>
        </div>
    );
}
