import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="kasa-nav" aria-label="barre de navigation">
            <Link to="/" className="kasa-nav_link-home" aria-label= "naviger vers l'accueil" >
                Accueil
            </Link>
            <Link to="/about" className="kasa-nav_link-about" aria-label= "naviger vers A Propos" >
                A Propos
            </Link>
        </nav>
    );
}
