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
                    <p className="card-text">
                        Ein Passwordmanager geschrieben in Python. Der Passwortmanager verfügt über eine Loginfunktion
                        ausserdem werden die Passwörter verknüpft mit dem Benutzer und Verschlüsselt in einer Textdatei gespeichert.
                    </p>
                    <p className="card-text">
                        Als Interface wurde Tkinter verwendet. Die Passwörter werden mit dem Algorithmus AES256 verschlüsselt.
                    </p>
                    <div className="Subtitle text-white">
                        Technologien/Tools:
                    </div>
                    <div className="card-text" style={{textAlign: "left", marginLeft: "80px"}}>
                        <ul>
                            <li>Sprache: Python</li>
                            <li>GUI: Tkinter</li>
                            <li>Verschlüsselung: AES256</li>
                            <li>Speicherung: Verschlüsselte Textdatei</li>
                        </ul>
                    </div>
                    <div className="passwordmanager-images">
                        {[PasswordmanagerLogin, PasswordmanagerInterface, PasswordmanagerPasswordpage].map((img, idx) => (
                            <div className="passwordmanager-image-column" key={idx}>
                                <img
                                    src={img}
                                    className="PasswordmanagerDetails-Image"
                                    alt="Bild"
                                    onClick={() => setModalImg(img)}
                                    style={{ cursor: "pointer" }}
                                />
                                <div className="image-caption">Dies ist die {idx === 0 ? "Login" : idx === 1 ? "Hauptfenster" : "Passwortseite"}</div>
                            </div>
                        ))}
                    </div>
                    {modalImg && (
                        <div className="lightbox" onClick={() => setModalImg(null)}>
                            <img src={modalImg} alt="Großansicht" className="lightbox-img" />
                        </div>
                    )}
                    <div className="code-container">
                        <button
                            className="Details-Button"
                            onClick={() => navigate('/projects/passwordmanager/code')}
                        >
                            Code
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Passwordmanagerdetails;
