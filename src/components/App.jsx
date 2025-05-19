import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Passwordmanagerdetails from "./Passwordmanagerdetails.jsx";
import Webpagedetails from "./Webpagedetails.jsx";
import PasswordmanagerCode from "./PasswordmanagerCode.jsx";
import VantaBackground from "./VantaBackground.jsx";
import Calculatordetails from "./Calculatordetails.jsx";
import CalculatorCode from "./CalculatorCode.jsx";
import Tictactoedetails from "./Tictactoedetails.jsx";

export default function App() {
    return (
        <Router basename="/mathieu">
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
                            <Route path="/projects/webpage" element={<Webpagedetails />} />
                            <Route path="/projects/calculator" element={<Calculatordetails />} />
                            <Route path="/projects/tictactoe" element={<Tictactoedetails />} />
                            <Route path="/projects/passwordmanager/code" element={<PasswordmanagerCode />} />
                            <Route path="/projects/calculator/code" element={<CalculatorCode />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}