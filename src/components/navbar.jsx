import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class CustomNavbar extends React.Component {
    render() {
        return (
            <Navbar 
                expand="lg" 
                className="bg-body-tertiary custom-navbar" 
                style={{ top: 0, position: "fixed", width: "100%", zIndex: 1000 }}>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Startseite</Nav.Link>
                            <NavDropdown title="Projekte" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/projects">Alle Projekte</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/projects/passwordmanager">Passwortmanager</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/projects/calculator">Rechner</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/projects/tictactoe">Tic Tac Toe</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/projects/wetterwunder">WetterWunder</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about" >Über mich</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}
export default CustomNavbar;
