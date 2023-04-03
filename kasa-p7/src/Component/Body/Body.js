import React from "react";
import "./Body.css";
import Fond from "./Img/Fond.png";

export default function Body() {
    return (
        <div className="Body">
            <section className="header-body">
                <img
                    className="fond-montagnes"
                    src={Fond}
                    alt="fond-montagnes"
                />
                <div className="ombre"> </div>
                <h2 className="titre-headerSection">
                    Chez vous, partout et ailleurs
                </h2>
            </section>
        </div>
    );
}
