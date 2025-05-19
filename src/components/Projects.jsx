import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordmanagerPNG from './assets/Passwordmanager.svg';
import ReactPNG from './assets/React.png';
import RechnerPNG from './assets/Rechner.png';
import TictactoePNG from './assets/tictactoe.jpg';

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
                {/* Webseite */}
                <div className="card text-bg-dark">
                    <div className="badge-on-image badge-multi">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            alt="React"
                            className="badge-img"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                            alt="JavaScript"
                            className="badge-img"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
                            alt="CSS"
                            className="badge-img"
                        />
                    </div>
                    <img
                        src={ReactPNG}
                        alt="React"
                        className="project-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Webseite</h5>
                        <p className="card-text">
                            Eine moderne Portfolio-Webseite mit React und CSS.
                        </p>
                        <button
                            className="Details-Button"
                            onClick={() => handleDetailsClick('webpage')}
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
                            Ein kleines Tictactoe Spiel als Konsolen-Anwendung in C#.
                        </p>
                        <button
                            className="Details-Button"
                            onClick={() => handleDetailsClick('todo')}
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

