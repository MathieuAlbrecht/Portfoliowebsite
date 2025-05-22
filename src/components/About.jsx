import React from 'react';
import img from './assets/Me.jpeg';

function About() {
    return (
        <div>
            <h1 className="header">Über mich</h1>
            <div className="projectdetails-card text-bg-dark">
                <div className="card-body about-container" >
                    <img className="Aboutme-img" src={img} />
                    <div className="card-text-About" >
                        <p className="card-text">
                            Hallo, ich bin Mathieu Albrecht. Zurzeit besuche ich die IMS (Informatikmittelschule) an der Alten Kanti in Aarau sowie an der Berufsfachschule BBBaden.                        </p>
                        <p className="card-text">
                            Ich lerne gerne neue Technologien und Programmiersprachen. Ich habe bereits mit C#, Python, JavaScript, HTML, CSS, React, MongoDB, Cassandra, SQL und AWS gearbeitet.                        </p>
                        <p className="card-text">
                            Ich suche für das Schuljahr 2026/2027 eine Praktikumsstelle bei welcher ich meine in der Schule gelernten Fähigkeiten in der Praxis anwenden und vertiefen kann. </p>
                        <div className="Contact-Buttons">
                            <a href="https://github.com/mathieualbrecht" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/mathieu-albrecht-412659363/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a href="mailto:mathieu@albright.ch">
                                 E-Mail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;


