import React from "react";
import "./Propos.css";
import Fond from "./Image/montagne.png";
import Header from "../../Component/Header/Header.js";
import Accordeon from "../../Component/Accordeon/Accordeon";

export default function Propos() {
    return (
        <>
            <Header />
            <section className="Body">
                <div className="header-bodyMontagne">
                    <img
                        className="fond-montagnesPropos"
                        src={Fond}
                        alt="fond-montagnes"
                    />
                </div>
            </section>

            <main className="accords">
                <Accordeon
                    title={"Fiabilité"}
                    text={
                        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    }
                />
                <Accordeon
                    className="accords"
                    title={"Respect"}
                    text={
                        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    }
                />

                <Accordeon
                    className="accords"
                    title={"Service"}
                    text={
                        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    }
                />
                <Accordeon
                    className="accords"
                    title={"Sécurité"}
                    text={
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    }
                />
            </main>
        </>
    );
}
