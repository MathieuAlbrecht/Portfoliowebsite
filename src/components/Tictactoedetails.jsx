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
                    <p className="card-text">
                        Ein Tictactoe Spiel geschrieben als Konsolenanwendung in C#. Das Spiel wird von 2 Spielern gespielt. Die Spieler geben abwechselnd ihre Züge ein. Das Spiel überprüft nach jedem Zug, ob ein Spieler gewonnen hat oder ob das Spiel unentschieden endet.
                    </p>
                    <div className="Subtitle text-white">
                        Technologien/Tools:
                    </div>
                    <div className="card-text" style={{textAlign: "left", marginLeft: "80px"}}>
                        <ul>
                            <li>Sprache: C#</li>
                        </ul>
                    </div>
                    <div>
                        <video className="tictactoe-video" width="640" height="360" controls>
                            <source src={TictactoeVideo} type="video/mp4" />
                            Ihr Browser unterstützt das Video-Tag nicht.
                        </video>
                        <div className="image-caption">Dies ist das Tic Tac Toe Spiel als Konsolenanwendung.</div>
                    </div>
                    <div className="code-container">
                        <button
                            className="Details-Button"
                            onClick={() => navigate('/projects/tictactoe/code')}
                        >
                            Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tictactoedetails;