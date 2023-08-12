import React, {useEffect, useRef, useState} from "react";
import chevron from '../../assets/images/chevron.svg'

export default function Collapse(props) {
    const [toggle, setToggle] = useState(false); // toggle === intérupteur
    const [heightEl, setHeightEl] = useState(); // initialisation de la hauteur du collapse

    const toggleState = () => {
        console.log(toggle);
        // la fonction de modification de l'intérupteur est donc chargé ici de modifier son status (true / false) au click
        setToggle(!toggle);
    };
    // console.log(toggle);

    const refHeight = useRef(); // conservation de la valeur du collaps déplié

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []); // définition de la hauteur du collapse déplié a sa première ouverture et conservation de cette hauteur dans refHeight

    return (
        <div className={`collapse ${props.aboutStyle}`}>
            {/*<div>*/}
            {/*    {console.log(props)}*/}
            {/*</div>*/}
            <div
                onClick={toggleState}
                className="collapse__visible"
            >
                <h2>{props.aboutTitle}</h2>
                <img
                    className={toggle ? 'chevron roted' : 'chevron'}
                    src={chevron}
                    alt="chevron"
                />
            </div>
            <div
                className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
                ref={refHeight}
                style={{ height: toggle ? `${heightEl}` : '0px'}}
            >
                <p aria-hidden={toggle ? 'true' : 'false'}>
                    {props.aboutText}
                </p>

            </div>
            {/*COLLAPSE*/}
        </div>
    );
}
