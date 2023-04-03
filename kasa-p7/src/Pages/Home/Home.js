import React from "react";
import "./Home.css";
import Header from "../../Component/Header/Header";
import Body from "../../Component/Body/Body";
import Gallery from "../../Component/Galerry/Gallery";
import Footer from "../../Component/footer/footer";
export default function Home() {
    return (
        <div className="D_Home">
            <Header />
            <Body />
            <Gallery />
            <Footer />
        </div>
    );
}
