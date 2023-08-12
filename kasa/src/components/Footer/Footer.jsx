import React from "react";
import logo from "../../assets/LOGO_footer.svg"

export default function Footer () {
    return(
        <footer className="kasa_footer-container" aria-label="le pied de page">
            <img src={logo} alt="logo de la kasa"  aria-label="logo de la kasa" />
            <p className="kasa_footer-container__text" aria-label="© 2020 Kasa. All rights reserved">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
