import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CustomNavbar from "./navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Passwordmanagerdetails from "./Passwordmanagerdetails.jsx";
import PasswordmanagerCode from "./PasswordmanagerCode.jsx";
import VantaBackground from "./VantaBackground.jsx";
import Calculatordetails from "./Calculatordetails.jsx";
import CalculatorCode from "./CalculatorCode.jsx";
import Tictactoedetails from "./Tictactoedetails.jsx";
import TictactoeCode from "./TictactoeCode.jsx";
import WetterWebsitedetails from "./WetterWebsitedetails.jsx";

function AppContent() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div>
            <VantaBackground />
            <div className="app-container">
                <CustomNavbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/passwordmanager" element={<Passwordmanagerdetails />} />
                        <Route path="/projects/calculator" element={<Calculatordetails />} />
                        <Route path="/projects/tictactoe" element={<Tictactoedetails />} />
                        <Route path="/projects/tictactoe/code" element={<TictactoeCode />} />
                        <Route path="/projects/passwordmanager/code" element={<PasswordmanagerCode />} />
                        <Route path="/projects/calculator/code" element={<CalculatorCode />} />
                        <Route path="/projects/wetterwunder" element={<WetterWebsitedetails />} />
                    </Routes>
                </div>
            </div>
            {!isHome && <Footer />}
        </div>
    );
}

export default function App() {
    return (
        <Router basename="/mathieu">
            <AppContent />
        </Router>
    );
}
