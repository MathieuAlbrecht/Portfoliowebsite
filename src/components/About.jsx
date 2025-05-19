import React from 'react';
import img from './assets/react.png';

function About() {
    return (
        <div>
            <h1 className="header">Über mich</h1>
            <div className="projectdetails-card text-bg-dark">
                <div className="card-body">
                    <img className="Aboutme-img" src={img} />
                    <div className="card-text-About">
                        <p className="card-text">
                            Hallo, ich bin Mathieu, zurzeit besuche ich die IMS(Informatikmittelsschule) in Aarau an der Alten Kanti sowie in Baden an der Berufsfachschule BBBaden.

                        </p>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default About;

