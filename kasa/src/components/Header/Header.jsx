import React from "react";
import LOGO from "../../assets/LOGO.svg"
import Nav from "../Nav/Nav";

export default function header() {

    return (
        <header className="kasa-header">
            <figure className="kasa-header__fig">
                <img src={LOGO} className='kasa-logo' alt="Le logo de l'agence Kasa"/>
            </figure>
            <Nav className="kasa-nav" />
        </header>
    )
}
