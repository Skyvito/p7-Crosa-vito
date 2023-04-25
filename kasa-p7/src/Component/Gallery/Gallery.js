import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Bloc from "../Bloc-location/BlocLocation";

export default function Gallery() {
    const [apparts, setApparts] = useState(null);

    useEffect(() => {
        fetch("logements.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setApparts(data);
            });
    }, []);

  

    return (
        <main  className="gallery-Father">
            <div className="gallery-bloc">
                {apparts &&
                    apparts.map((logement) => {
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
        </main >
    );
}
