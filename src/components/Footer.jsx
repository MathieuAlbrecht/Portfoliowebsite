import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Mathieu Albrecht. Alle Rechte vorbehalten.</p>
            <p>
                <a href="https://github.com/mathieualbrecht" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a> |
                <a href="https://www.linkedin.com/in/mathieu-albrecht-412659363/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a> |
                <a href="mailto:mathieu@albright.ch">
                    E-Mail
                </a>
            </p>
        </footer>
    );
}

export default Footer;
