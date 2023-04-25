import React, { useState, useEffect } from "react";
import Tags from "../Tag/Tag";
import "./CardUtilisateur.css";
import WhiteStar from "./img/WhiteStar.svg";
import RedStar from "./img/RedStar.svg";

export default function CardUtilisateur(props) {
    const logement = props.logement;

    const [redStars, setRedStars] = useState(0);

    useEffect(() => {
        if (logement.rating) {
            setRedStars(logement.rating);
        }
    }, [logement.rating]);

    return (
        <section className="main-containe">
            <div className="information">
                <div className="titleInformation">
                    <div>
                        <h2 className="titleLogement">{logement.title}</h2>
                        <p className="locationLogement">{logement.location}</p>

                        <div className="tag">
                            {logement.tags.map((tag, index) => (
                                <Tags key={index} text={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="starAndProfile">
                        <div className="rating">
                            {[...Array(5)].map((item, i) => {
                                const isRed = i < redStars;
                                const starImg = isRed ? RedStar : WhiteStar;
                                console.log(isRed);
                                return (
                                    <img
                                        className="star"
                                        key={i}
                                        src={starImg}
                                        alt="étoile de notation"
                                    />
                                );
                            })}
                        </div>
                        <div className="personnelInformation">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} alt="profil" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
