import React from "react";
import "./Home.css";
import Fond from "./Img/Fond.png";
import Header from "../../Component/Header/Header";

import Gallery from "../../Component/Gallery/Gallery";
import Footer from "../../Component/footer/footer";
export default function Home() {
    return (
        <div className="D_Home">
            <Header />
            <div className="Body">
                <section className="header-body">
                    <img
                        className="fond-montagnes"
                        src={Fond}
                        alt="fond-montagnes"
                    />
                    <h2 className="titre-headerSection">
                        Chez vous, partout et ailleurs
                    </h2>
                </section>
            </div>

            <Gallery />
            <Footer />
        </div>
    );
}
