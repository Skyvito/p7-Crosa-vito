import React from "react";
import Header from "../../Component/Header/Header";
import SliderImg from "../../Component/Carrousel/Carrousel.js";
import CardUtilisateur from "../../Component/CardUtilisateur/CardUtilisateur";
import AccordeonLogement from "../../Component/Accordeon/Accordeon-Logement/AccordeonLogement";

export default function Appartement() {
    return (
        <>
            <Header />
            <SliderImg />
            <CardUtilisateur />
            <AccordeonLogement />
        </>
    );
}
