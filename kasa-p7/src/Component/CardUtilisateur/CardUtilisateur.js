import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "../../logements/logements";
import Tags from "../Tag/Tag";
import "./CardUtilisateur.css";
import WhiteStar from "./img/WhiteStar.svg";
import RedStar from "./img/RedStar.svg";

export default function CardUtilisateur() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    console.log(logement);

    const [redStars, setRedStars] = useState(0);

    useEffect(() => {
        if (logement.rating) {
            setRedStars(logement.rating);
        }
    }, [logement.rating]);

    return (
        <div className="divMother">
            <div className="information">
                <div className="titleInformation">
                    <h2 className="titleLogement">{logement.title}</h2>
                    <div className="personnelInformation">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" />
                    </div>
                </div>
                <p className="locationLogement">{logement.location}</p>
            </div>
            <div className="tagList">
                <div className="tag">
                {logement.tags.map((tag, index) => (
                    <Tags key={index} text={tag} />
                ))}
                </div>
                <div className="rating">
                    {[...Array(5)].map((item, i) => {
                        const isRed = i < redStars;
                        const starImg = isRed ? RedStar : WhiteStar;
                        return <img className="star" key={i} src={starImg} alt="" />;
                    })}
                </div>
            </div>
        </div>
    );
}
