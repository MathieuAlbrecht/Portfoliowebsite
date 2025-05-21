import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WetterWebseiteStartseite from "./assets/WetterWebseite_Startseite.png";
import WetterWebseiteVorhersage from "./assets/WetterWebseite_Wettervorhersage.png";
import WetterWebseiteKontakt from "./assets/WetterWebseite_Kontakt.png";

function WetterWebsitedetails() {
    const navigate = useNavigate();
    const [modalImg, setModalImg] = useState(null);

    return (
        <div>
            <h1 className="header">WetterWunder</h1>
            <div className="projectdetails-card text-bg-dark">
                <div className="card-body">
                    <div className="projekt project-details-card" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
                        <div className="project-header-row">
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML Badge" height="20" className="project-badge" />
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS Badge" height="20" className="project-badge" />
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JS Badge" height="20" className="project-badge" />
                        </div>
                        <div className="Subtitle subtitle-white">Beschreibung:</div>
                        <p className="project-description">
                            <strong>Deine Wetter-App im Browser – aktuell, übersichtlich, responsiv.</strong><br />
                            WetterWunder zeigt tagesaktuelle Wetterdaten sowie eine 7-Tage-Vorhersage für verschiedene Schweizer Städte. Die Daten werden in Echtzeit von Open-Meteo geladen und mit passenden Icons anschaulich dargestellt. Die Oberfläche ist für Mobilgeräte und Desktop optimiert.
                        </p>
                        <div className="Subtitle subtitle-white">Funktionen:</div>
                        <ul className="project-features">
                            <li>Aktuelles Wetter für Basel, Genf, Zürich, Bern</li>
                            <li>7-Tage-Vorhersage für Basel & Baden</li>
                            <li>Dynamische Wetter-Icons (Sonne, Wolken, Regen)</li>
                            <li>Modernes, responsives Design für alle Geräte</li>
                            <li>Kontaktformular für Feedback</li>
                        </ul>
                        <div className="Subtitle subtitle-white">Technologien:</div>
                        <p className="project-tech">
                            HTML5, CSS3, JavaScript (Fetch API), Open-Meteo API
                        </p>
                    </div>
                    <div className="passwordmanager-images">
                        <div className="passwordmanager-image-column">
                            <img
                                src={WetterWebseiteStartseite}
                                className="PasswordmanagerDetails-Image"
                                alt="Screenshot WetterWunder Startseite"
                                onClick={() => setModalImg(WetterWebseiteStartseite)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="caption passwordmanager-caption">Startseite: Übersicht mit aktuellem Wetter und Navigation zu weiteren Funktionen.</div>
                        </div>
                        <div className="passwordmanager-image-column">
                            <img
                                src={WetterWebseiteVorhersage}
                                className="PasswordmanagerDetails-Image"
                                alt="Screenshot WetterWunder Wettervorhersage"
                                onClick={() => setModalImg(WetterWebseiteVorhersage)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="caption passwordmanager-caption">7-Tage-Vorhersage: Detaillierte Wetterprognose mit dynamischen Icons für verschiedene Städte.</div>
                        </div>
                        <div className="passwordmanager-image-column">
                            <img
                                src={WetterWebseiteKontakt}
                                className="PasswordmanagerDetails-Image"
                                alt="Screenshot WetterWunder Kontaktformular"
                                onClick={() => setModalImg(WetterWebseiteKontakt)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="caption passwordmanager-caption">Kontaktformular: Möglichkeit für direktes Feedback.</div>
                        </div>
                    </div>
                    {modalImg && (
                        <div className="lightbox" onClick={() => setModalImg(null)}>
                            <img src={modalImg} alt="Großansicht" className="lightbox-img" />
                        </div>
                    )}
                    <div className="Buttons-container" >
                        <a
                            className="Details-Button"
                            href="https://github.com/MathieuAlbrecht/Wetter-Webseite"
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

export default WetterWebsitedetails;
