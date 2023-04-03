import React from "react";
import Header from "../../Component/Header/Header.js";
import Body from "../../Component/Body/Body-Propos/bodyPropos.js";
import AccordeonPropos from "../../Component/Accordeon/Accordeon-Propos/ProposAccordeon.js";
import Footer from "../../Component/footer/footer.js";
export default function Propos() {
    return (
        <>
            <Header />
            <Body />
            <AccordeonPropos />
        </>
    );
}