import React, { useState, useRef, useEffect } from "react";
import Chevron from "./img/Chevron.png";
import UpChevron from "./img/upChevron.png";
import "./Accordeon.css";

export default function Accordeon(props) {
    const [toogle, setToogle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toogleState = () => {
        setToogle(!toogle);
    };

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
        const handleResize = () => {
            setHeightEl(`${refHeight.current.scrollHeight}px`);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="accord">
            <div onClick={toogleState} className="accord-visible">
                <h2>{props.title}</h2>
                <img
                    className={toogle ? "chevronDown none" : "chevronDown"}
                    src={Chevron}
                    alt="Chevron Down"
                />
                <img
                    className={toogle ? "chevronUp" : "chevronUp none"}
                    src={UpChevron}
                    alt="Chevron up"
                />
            </div>

            <div
                ref={refHeight}
                className={toogle ? "accord-toogle animated" : "accord-toogle "}
                style={{ height: toogle ? `${heightEl}` : "0px" }}
            >
                <p aria-hidden={toogle ? "true" : "false"}>{props.text}</p>
            </div>
        </div>
    );
}
