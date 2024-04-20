import React, { Component, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, Link } from 'react-router-dom';


function ColorSchemesExample() {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavbar(true);
    }
  }, []);

  if (location.pathname !== "/") {
    return (<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt={'Shirley Zhang'} style={{ width: '3rem', margin: '.5rem' }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#projects">Portfolio</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    );    
  }
  return null;

}


class Navbar_ extends Component {

    render () {
        return (
          <ColorSchemesExample/>
        );
    }
}

export default Navbar_; 
