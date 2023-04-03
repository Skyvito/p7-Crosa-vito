import React from "react";
import "./Tag.css";

export default function Tag(props) {
    return (
        <div className="tag-name">
            <p>{props.text}</p>
        </div>
    );
}
