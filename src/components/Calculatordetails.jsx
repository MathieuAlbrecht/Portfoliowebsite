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
                    <p className="card-text">
                        Ein einfacher Rechner geschrieben als Konsolenanwendung in C#. Der Rechner kann die einfachen Rechenoperationen Addition, Subtraktion, Divison und Multiplikation durchführen.
                    </p>
                    <div className="Subtitle text-white">
                        Technologien/Tools:
                    </div>
                    <div className="card-text" style={{textAlign: "left", marginLeft: "80px"}}>
                        <ul>
                            <li>Sprache: C#</li>
                        </ul>
                    </div>
                    <div className="calculator-image">
                        <img
                            src={Rechner}
                            className="CalculatorDetails-Image"
                            alt="Login"
                            onClick={() => setModalImg(Rechner)}
                            style={{ cursor: "pointer" }}
                        />
                        <div className="image-caption">Dies ist der Rechner der die Grundoperationen durchgeführt hat.</div>
                    </div>
                    {modalImg && (
                        <div className="lightbox" onClick={() => setModalImg(null)}>
                            <img src={modalImg} alt="Großansicht" className="lightbox-img" />
                        </div>
                    )}
                    <div className="code-container">
                        <button
                            className="Details-Button"
                            onClick={() => navigate('/projects/calculator/code')}
                        >
                            Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculatordetails;
