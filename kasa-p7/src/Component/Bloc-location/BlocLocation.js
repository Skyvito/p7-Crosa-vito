import React from "react";
import "./BlocLocation.css";
import { Link } from "react-router-dom";

export default function BlocLocation(props) {
    return (
       
        <Link to={`/logement/${props.id}`} className="blockLocation">
            <img src={props.cover} alt="cover logement" />
            <h3>{props.title}</h3>
        </Link>
    );
}
