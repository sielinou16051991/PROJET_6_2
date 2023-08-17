import React from "react";
import {Link} from "react-router-dom";

export default function ErrorPage() {
    return (
    <div className="error-container">
        <p className="message_404">404</p>
        <p className="message_error">Oups! La page que vous demandez n'existe pas.</p>
        <Link rto="/" class="message_redirect">Retourner sur la page d’accueil</Link>
    </div>

)
}
