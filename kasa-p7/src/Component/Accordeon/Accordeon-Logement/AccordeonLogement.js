import React from "react";
import Accordeon from "../Accordeon";
import logements from "../../../logements/logements.js";
import { useParams } from "react-router-dom";
import "./AccordeonLogement.css";

export default function AccordeonLogement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return (
        <div className="accordeonLogement">
            <div className="AccordelonYoung">
                <div className="AccordeonDescritpion">
                    <Accordeon
                        title="Descritpion"
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
    );
}
