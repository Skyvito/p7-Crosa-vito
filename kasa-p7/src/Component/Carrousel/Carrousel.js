import React, { useState } from "react";
import "./Carrousel.css";
import Left from "./img/left.svg";
import Right from "./img/right.svg";

export default function SliderImg(props) {
    const logement = props.logement;
    console.log(logement);

    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(currentIndex);

    return (
        <>
            <div className="slider">
                <div className="sliders">
                    {logement.pictures.map((picture, index) => (
                        <div
                            className="div-slider"
                            key={index}
                            style={{
                                display:
                                    index === currentIndex ? "block" : "none",
                            }}
                        >
                            <img
                                className="imgAppartement"
                                src={picture}
                                alt="appartement"
                            />
                            {logement.pictures.length > 1 && (
                            <p className="image-number">{`${index + 1}/${
                                logement.pictures.length
                            }`}</p>)}
                        </div>
                    ))}
                    {logement.pictures.length > 1 && (
                        <>
                            <button
                                onClick={() =>
                                    setCurrentIndex(
                                        (currentIndex -
                                            1 +
                                            logement.pictures.length) %
                                            logement.pictures.length
                                    )
                                }
                            >
                                <img
                                    className="leftcursor "
                                    src={Left}
                                    alt="cursor Left"
                                />
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentIndex(
                                        (currentIndex + 1) %
                                            logement.pictures.length
                                    )
                                }
                            >
                                <img
                                    className="rightcursor"
                                    src={Right}
                                    alt="cursor Right"
                                />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
