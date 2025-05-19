import React from 'react';
import { useNavigate } from 'react-router-dom';
import NameDisplay from './NameDisplay.jsx';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="about-container" style={{ flexDirection: "column", alignItems: "flex-start", height: "auto", paddingLeft: 0 }}>
                <h1 className="name-container">Hallo, ich bin</h1>
                <h1 className="nameDisplay-container"><NameDisplay /></h1>
            </div>
            <div className="Homepagebuttons" style={{ marginLeft: 0 }}>
                <button className="Homepagebutton" onClick={() => navigate('/projects')}>Projekte</button>
                <button className="Homepagebutton" onClick={() => navigate('/about')}>Über mich</button>
            </div>
        </div>
    );
}

export default Home;
