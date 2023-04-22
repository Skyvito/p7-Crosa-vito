import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Appartement.css";
import Header from "../../Component/Header/Header";
import SliderImg from "../../Component/Carrousel/Carrousel.js";
import CardUtilisateur from "../../Component/CardUtilisateur/CardUtilisateur";
import Accordeon from "../../Component/Accordeon/Accordeon";

export default function Appartement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState();

    useEffect(() => {
        fetch(`/logements.json`)
            .then((response) => response.json())
            .then((data) => {
                const logement = data.find((logement) => logement.id === id);
                console.log(logement);
                if (logement === undefined) {
                    console.log("non");
                    navigate("/erreur");
                }
                console.log("oui");
                setLogement(logement);
            });
    }, []);
 

    return logement ? (
        <>
            <Header />
            <SliderImg logement={logement} />
            <CardUtilisateur logement={logement} />

            <div className="accordeonLogement">
                <div className="AccordelonYoung">
                    <div className="AccordeonDescritpion">
                        <Accordeon
                            title="Description"
                            text={logement.description}
                        />
                    </div>
                    <div className="AccordeonÉquipements">
                        <Accordeon
                            title="Équipements"
                            text={logement.equipments.map((equipement) => (
                                <li key={equipement}>{equipement}</li>
                            ))}
                        />
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <p>Chargement en cours...</p>
        </>
    );
}
