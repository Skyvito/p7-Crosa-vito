import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Appartement.css";
import Header from "../../Component/Header/Header";
import SliderImg from "../../Component/Carrousel/Carrousel.js";
import CardUtilisateur from "../../Component/CardUtilisateur/CardUtilisateur";
import Accordeon from "../../Component/Accordeon/Accordeon";
import Erreur from "../../Pages/Erreur/Erreur";

export default function Appartement() {
    const [logements, setLogements] = useState([]);
    
    useEffect(() => {
        fetch(`/logements.json`)
            .then((response) => response.json())
            .then((data) => {
                setLogements(data);
                
            });
    }, []);

    console.log(logements);
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    console.log(logement);

    
    
    if (!logement) {
        return <Erreur />;
    }
    

    return (
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
    );
}
