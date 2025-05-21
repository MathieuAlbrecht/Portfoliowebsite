import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rechner from "./assets/Rechneranwendung.png";

function Calculatordetails() {
    const navigate = useNavigate();
    const [modalImg, setModalImg] = useState(null);

    return (
        <div>
            <h1 className="header">Rechner</h1>
            <div className="projectdetails-card text-bg-dark">
                <div className="card-body">
                    <div className="projekt project-details-card">
                        <div className="project-header-row">
                            <img src="https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white" alt="C# Badge" height="20" className="project-badge" />
                        </div>
                        <div className="Subtitle subtitle-white">Beschreibung:</div>
                        <p className="project-description">
                            <strong>Schneller Konsolen-Taschenrechner für die Grundrechenarten.</strong><br />
                            Ein schlanker Konsolenrechner für Addition, Subtraktion, Multiplikation, Division, Quadratwurzeln und Potenzen. Die Bedienung läuft komplett über die Tastatur und eignet sich ideal für schnelle Rechnungen oder als Lernprojekt in C#.
                        </p>
                        <div className="Subtitle subtitle-white">Funktionen:</div>
                        <ul className="project-features">
                            <li>Rechnet mit +, −, ×, ÷, √, ^</li>
                            <li>Beliebig viele Rechnungen nacheinander möglich</li>
                            <li>Minimalistischer, verständlicher Code</li>
                        </ul>
                        <div className="Subtitle subtitle-white">Technologien:</div>
                        <p className="project-tech">
                            C# (.NET 7 Console Application)
                        </p>

                            <img
                                src={Rechner}
                                className="project-screenshot"
                                alt="Screenshot Rechner"
                                onClick={() => setModalImg(Rechner)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="caption project-caption">Beispiel einer Rechenoperation (Konsole)</div>

                    </div>
                    {modalImg && (
                        <div className="lightbox" onClick={() => setModalImg(null)}>
                            <img src={modalImg} alt="Großansicht" className="lightbox-img" />
                        </div>
                    )}
                    <div className="Buttons-container">
                        <button
                            className="Details-Button"
                            onClick={() => navigate('/projects/calculator/code')}
                        >
                            Code
                        </button>
                        <a
                            className="Details-Button"
                            href="https://github.com/mathieualbrecht/rechner"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculatordetails;
