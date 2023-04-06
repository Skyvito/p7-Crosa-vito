import React, { useState } from "react";
import logements from "../../logements/logements";
import { useParams } from "react-router-dom";
import Erreur from "../Erreur/Erreur";
import "./Carrousel.css";
import Left from "./img/left.svg";
import Right from "./img/right.svg";

export default function SliderImg() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    console.log(logement);

    
  
    const [currentIndex, setCurrentIndex] = useState(0);


  console.log(currentIndex);
  
    if (!logement) {
        return <div>{Erreur}</div>;
      }
  
    return (
     <>

<div className="slider">
    <div className="sliders">
        {logement.pictures.map((picture, index) => (
          <img
          className="imgAppartement"
            key={index}
            src={picture}
            alt="appartement"
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
        <button
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + logement.pictures.length) % logement.pictures.length)
          }
        >
          <img className="leftcursor " src={Left} alt="cursor Left" />
        </button>
        <button onClick={() => 
              setCurrentIndex((currentIndex + 1) % logement.pictures.length)
              
            }>
            <img className="rightcursor"  src={Right} alt="cursor Right" />
        </button>
        </div>
      </div>
   
     </>
    )
  }


