import React from "react";
import "./Gallery.css";
import Bloc from "../Bloc-location/BlocLocation";
import logements from "../../logements/logements";

export default function Gallery() {
    return (
        <div className="gallery-Father">
            <div className="gallery-bloc">
                {logements.map((logement) => {
                    console.log(logement);
                    return (
                        <Bloc
                            className="bloc"
                            key={logement.id}
                            id={logement.id}
                            cover={logement.cover}
                            title={logement.title}
                        />
                    );
                })}
            </div>
        </div>
    );
}
