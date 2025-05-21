import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordmanagerLogin from "./assets/Passwordmanager_Login.png";
import PasswordmanagerInterface from "./assets/Passwordmanager_Interface.png";
import PasswordmanagerPasswordpage from "./assets/Passwordmanager_Passwordpage.png";

function Passwordmanagerdetails() {
    const navigate = useNavigate();
    const [modalImg, setModalImg] = useState(null);

    return (
        <div>
            <h1 className="header">Passwortmanager</h1>
            <div className="projectdetails-card text-bg-dark">
                <div className="card-body">
                    <div className="projekt project-details-card" >
                        <div className="project-header-row">
                            <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python Badge" height="20" className="project-badge" />
                        </div>
                        <div className="Subtitle subtitle-white">Beschreibung:</div>
                        <p className="project-description">
                            <strong>Sicher. Lokal. Übersichtlich.</strong><br />
                            Ein moderner Passwortmanager mit verschlüsselter, lokaler Speicherung und intuitiver Oberfläche. Verwalte, zeige, bearbeite oder lösche deine Passwörter sicher – alles bleibt auf deinem Rechner. Mehrere Nutzer werden unterstützt.
                        </p>
                        <div className="Subtitle subtitle-white">Funktionen:</div>
                        <ul className="project-features">
                            <li>Verschlüsselte Passwortspeicherung mit Fernet (cryptography)</li>
                            <li>Intuitive Oberfläche</li>
                            <li>Passwörter anzeigen, kopieren, bearbeiten, löschen</li>
                            <li>Login/Registrierung für mehrere Nutzer</li>
                        </ul>
                        <div className="Subtitle subtitle-white">Technologien:</div>
                        <p className="project-tech">
                            Python, Tkinter, ttkthemes, cryptography
                        </p>
                    </div>
                    <div className="passwordmanager-images">
                        <div className="passwordmanager-image-column">
                            <img
                                src={PasswordmanagerLogin}
                                className="PasswordmanagerDetails-Image"
                                alt="Login-Ansicht Passwortmanager"
                                onClick={() => setModalImg(PasswordmanagerLogin)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="caption passwordmanager-caption">Login-Ansicht: Anmeldung oder Registrierung eines Nutzers.</div>
                        </div>
                        <div className="passwordmanager-image-column">
                            <img
                                src={PasswordmanagerInterface}
                                className="PasswordmanagerDetails-Image"
                                alt="Hauptansicht Passwortmanager"
                                onClick={() => setModalImg(PasswordmanagerInterface)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="caption passwordmanager-caption">Hauptansicht: Übersicht und Verwaltung aller gespeicherten Passwörter.</div>
                        </div>
                        <div className="passwordmanager-image-column">
                            <img
                                src={PasswordmanagerPasswordpage}
                                className="PasswordmanagerDetails-Image"
                                alt="Passwort-Detailansicht Passwortmanager"
                                onClick={() => setModalImg(PasswordmanagerPasswordpage)}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="caption passwordmanager-caption">Detailansicht: Einzelne Passwörter anzeigen, kopieren, bearbeiten oder löschen.</div>
                        </div>
                    </div>
                    {modalImg && (
                        <div className="lightbox" onClick={() => setModalImg(null)}>
                            <img src={modalImg} alt="Großansicht" className="lightbox-img" />
                        </div>
                    )}
                    <div className="Buttons-container" >
                        <button
                            className="Details-Button"
                            onClick={() => navigate('/projects/passwordmanager/code')}
                        >
                            Code
                        </button>
                        <a
                            className="Details-Button"
                            href="https://github.com/mathieualbrecht/passwordmanager"
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

export default Passwordmanagerdetails;
