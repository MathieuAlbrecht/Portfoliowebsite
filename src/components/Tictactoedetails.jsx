import React from "react";
import { useNavigate } from "react-router-dom";
import TictactoeVideo from "./assets/TictactoeVideo.mov";

function Tictactoedetails() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="header">Tic Tac Toe</h1>
            <div className="projectdetails-card text-bg-dark">
                <div className="card-body">
                    <div className="projekt project-details-card" >
                        <div className="project-header-row">
                            <img src="https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white" alt="C# Badge" height="20" className="project-badge" />
                        </div>
                        <div className="Subtitle subtitle-white">Beschreibung:</div>
                        <p className="project-description">
                            <strong>Klassisches TicTacToe-Spiel für zwei Spieler – direkt in der Konsole!</strong><br />
                            Spiele das beliebte Strategiespiel auf deinem eigenen Computer. Die Anwendung läuft als Konsolenprogramm und ist perfekt, um grundlegende Programmierlogik und das Zusammenspiel von Benutzereingaben kennenzulernen.
                        </p>
                        <div className="Subtitle subtitle-white">Funktionen:</div>
                        <ul className="project-features">
                            <li>3x3-Spielfeld für zwei Spieler (X/O)</li>
                            <li>Rundenbasierte Eingabe über Konsole</li>
                            <li>Automatische Gewinner- und Unentschieden-Erkennung</li>
                        </ul>
                        <div className="Subtitle subtitle-white">Technologien:</div>
                        <p className="project-tech">
                           C# (.NET Core Console Application)
                        </p>
                        <video className="tictactoe-video-large" controls>
                            <source src={TictactoeVideo} type="video/mp4" />
                            Dein Browser unterstützt das Video-Tag nicht.
                        </video>
                        <div className="caption project-caption">Gameplay-Video</div>
                    </div>
                    <div className="Buttons-container">
                        <button
                            className="Details-Button"
                            onClick={() => navigate('/projects/tictactoe/code')}
                        >
                            Code
                        </button>
                        <a
                            className="Details-Button"
                            href="https://github.com/mathieualbrecht/tictactoe"
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

export default Tictactoedetails;
