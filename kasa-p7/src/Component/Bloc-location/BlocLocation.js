import React from "react";
import "./BlocLocation.css";

export default function BlocLocation(props) {
    return (
        <div className="blocLocation">
            <div className="rectangle">
                <p>{props.text}</p>
            </div>
        </div>
    );
}
