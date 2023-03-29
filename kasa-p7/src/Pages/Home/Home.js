import React from "react";
import "./Home.css";
import Header from "./Header/HeaderDesktop";
import Body from "./Body/Body";

export default function Home() {
    return (
        <div className="D_Home">
            <Header />
            <Body />
        </div>
    );
}
