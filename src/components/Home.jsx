import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NameDisplay from './NameDisplay.jsx';
import Marquee from 'react-fast-marquee';
import csharp from './assets/Technologies/csharp.svg';
import js from './assets/Technologies/javascript-js.svg';
import python from './assets/Technologies/python.svg';
import html from './assets/Technologies/html-5.svg';
import css from './assets/Technologies/css-3.svg';
import mongo from './assets/Technologies/mongodb-original-wordmark.svg';
import cassandra from './assets/Technologies/cassandra.svg';
import aws from './assets/Technologies/aws.svg';
import sql from './assets/Technologies/sql-database-generic.svg';
import github from './assets/Technologies/github.svg';
import gitlab from './assets/Technologies/gitlab.svg';
import react from './assets/Technologies/react.svg';
import docker from './assets/Technologies/docker.svg';

const techIconsInfo = [
    { src: csharp, alt: "C#", description: "Mit C# habe ich schon oft gearbeitet und habe Konsolenanwendungen, aber auch ein Backend als REST-API implementiert." },
    { src: js, alt: "JavaScript", description: "JavaScript habe ich für das Implementieren von Webseiten benutzt." },
    { src: python, alt: "Python", description: "Mit Python habe ich einen einfachen Passwortmanager programmiert." },
    { src: html, alt: "HTML5", description: "HTML5 habe ich genutzt, für die Module \"Webauftritt erstellen und veröffentlichen & Frontend einer interaktiven Webapplikation realisieren.\"" },
    { src: css, alt: "CSS3", description: "CSS3 habe ich für die Module \"Webauftritt erstellen und veröffentlichen & Frontend einer interaktiven Webapplikation realisieren\" aber auch für diese Webseite hier benutzt." },
    { src: mongo, alt: "MongoDB", description: "Im Rahmen des Moduls \"NoSQL-Datenbanken einsetzen\" habe ich MongoDB als Datenbankverwaltung einer NoSQL-Datenbank verwendet." },
    { src: cassandra, alt: "Cassandra", description: "Im Rahmen des Moduls \"NoSQL-Datenbanken einsetzen\" habe ich Cassandra als Datenbankverwaltung einer NoSQL-Datenbank verwendet." },
    { src: aws, alt: "AWS", description: "Im Modul \"Cloud Lösungen konzipieren und realisieren\"  habe ich mithilfe einer EC2-Instanz die AWS mit einer externen MySQL-Datenbank verknüpft und eine SSH-Verbindung mit Drupal eingerichtet."},
    { src: sql, alt: "SQL", description: "Mit SQL habe ich Datenbanken erstellt, Daten eingefügt und dann Abfragen, mit SELECT, aber auch JOIN geschrieben." },
    { src: github, alt: "GitHub", description: "GitHub habe ich als Versionierung für meine Programmierprojekte genutzt." },
    { src: gitlab, alt: "GitLab", description: "GitLab habe ich genutzt, um während Modulen mit Gruppenmitgliedern zusammenzuarbeiten." },
    { src: react, alt: "React", description: "React habe ich auf dieser Webseite genutzt." },
    { src: docker, alt: "Docker", description: "Im Modul \"Dienst mit Container anwenden\" habe ich Dockerfile geschrieben, Images erstellt und Container laufen lassen." },
];


function Home() {
    const navigate = useNavigate();
    const [selectedTech, setSelectedTech] = useState(null);

    return (
        <div>
            <div className="home-container" style={{gap: 0}}>
                <div className="about-container" style={{flexDirection: "column", alignItems: "flex-start", height: "auto", paddingLeft: 0, marginBottom: 0}}>
                    <h1 className="name-container">Hallo, ich bin</h1>
                    <h1 className="nameDisplay-container"><NameDisplay/></h1>
                </div>
                <div className="Homepagebuttons" style={{marginLeft: 0, marginBottom: 24}}>
                    <button className="Homepagebutton" onClick={() => navigate('/projects')}>Projekte</button>
                    <button className="Homepagebutton" onClick={() => navigate('/about')}>Über mich</button>
                </div>
                <div style={{marginTop: 24, marginBottom: 0, width: "100%"}}>
                    <div className="Subtitle" style={{marginLeft: 0, textAlign: "center"}}>Bereits verwendete Technologien / Tools:</div>
                    <p className="subtitle" style={{marginLeft: 0, textAlign: "center"}}>Klicke auf die Icons für mehr Informationen</p>
                    <div className="marquee-container" style={{width: 720, margin: "0 auto"}}>
                        <Marquee gradient={false} speed={60} pauseOnHover={true} style={{height: 100}}>
                            {techIconsInfo.map((tech, i) => (
                                <img
                                    src={tech.src}
                                    className="marquee-img"
                                    alt={tech.alt}
                                    key={i}
                                    onClick={() => setSelectedTech(tech)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
            {selectedTech && (
                <div className="tech-modal" onClick={() => setSelectedTech(null)}>
                    <div className="tech-modal-content" onClick={e => e.stopPropagation()}>
                        <h3>{selectedTech.alt}</h3>
                        <p>{selectedTech.description}</p>
                        <button className="tech-modal-close" onClick={() => setSelectedTech(null)}>Schließen</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
