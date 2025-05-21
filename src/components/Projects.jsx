import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordmanagerPNG from './assets/Passwordmanager.svg';
import ReactPNG from './assets/React.png';
import RechnerPNG from './assets/Rechner.png';
import TictactoePNG from './assets/tictactoe.jpg';
import WetterWebseitePNG from './assets/WetterWebseite.png';

function Projects() {
    const navigate = useNavigate();

    const handleDetailsClick = (path) => {
        navigate(`/projects/${path}`);
    };

    return (
        <div>
            <h1 className="header">Meine Projekte</h1>
            <div className="projects-grid">
                {/* Passwortmanager */}
                <div className="card text-bg-dark">
                    <div className="badge-on-image">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                            alt="Python"
                            className="badge-img"
                        />
                    </div>
                    <img
                        src={PasswordmanagerPNG}
                        alt="Lock"
                        className="project-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Passwortmanager</h5>
                        <p className="card-text">
                            Ein sicherer Passwortmanager geschrieben in Python.
                        </p>
                        <button
                            className="Details-Button"
                            onClick={() => handleDetailsClick('passwordmanager')}
                        >
                            Details
                        </button>
                    </div>
                </div>

                {/* Rechner */}
                <div className="card text-bg-dark">
                    <div className="badge-on-image">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg"
                            alt="C#"
                            className="badge-img"
                        />
                    </div>
                    <img
                        src={RechnerPNG}
                        alt="Rechner"
                        className="project-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Rechner</h5>
                        <p className="card-text">
                            Ein klassischer Rechner als Konsolen-Anwendung in C#.
                        </p>
                        <button
                            className="Details-Button"
                            onClick={() => handleDetailsClick('calculator')}
                        >
                            Details
                        </button>
                    </div>
                </div>
                <div className="card text-bg-dark">
                    <div className="badge-on-image">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg"
                            alt="C#"
                            className="badge-img"
                        />
                    </div>
                    <img
                        src={TictactoePNG}
                        alt="Tictactoe-App"
                        className="project-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Tic Tac Toe</h5>
                        <p className="card-text">
                            Ein kleines Tictactoe-Spiel als Konsolen-Anwendung in C#, für 2 Spieler.
                        </p>
                        <button
                            className="Details-Button"
                            onClick={() => handleDetailsClick('tictactoe')}
                        >
                            Details
                        </button>
                    </div>
                </div>

                {/* WetterWunder */}
                <div className="card text-bg-dark">
                    <div className="badge-on-image badge-multi">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                            alt="HTML5"
                            className="badge-img"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                            alt="CSS3"
                            className="badge-img"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="badge-img"
                        />
                    </div>
                    <img
                        src={WetterWebseitePNG}
                        alt="WetterWunder"
                        className="project-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">WetterWunder</h5>
                        <p className="card-text">
                            Wetter-App mit aktueller Wetteranzeige und 7-Tage-Vorhersage für Schweizer Städte.
                        </p>
                        <button
                            className="Details-Button"
                            onClick={() => handleDetailsClick('wetterwunder')}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
