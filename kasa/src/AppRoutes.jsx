import { Routes , Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";

function AppRoutes() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default AppRoutes;
