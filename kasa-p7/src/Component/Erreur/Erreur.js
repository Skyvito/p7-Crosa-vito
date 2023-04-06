import React from "react";
import "./Erreur.css";
import { Link } from "react-router-dom";

export default function Erreur() {
    return (
        <div className="divblockError">
            <h1 className="Title-Error">404</h1>
            <p className="Description-Error">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="LinkReturn">
                <p>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    );
}
