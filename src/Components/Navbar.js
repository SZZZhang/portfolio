import React, { Component, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, Link, NavLink } from 'react-router-dom';


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
          <NavLink to="/">
          <img src={logo} alt={'Shirley Zhang'} style={{ width: '3rem', margin: '.5rem' }} />
          </NavLink>
          <mark className='navbar-txt'>            </mark>
          <Nav className="me-auto">
            <NavLink style={{textDecoration: 'none', paddingTop: '0.5rem' }} to="/"> 
            <mark className='navbar-txt'>{"Home  "}  </mark>
            </NavLink>
            <br></br>
            <br></br>
            <NavLink style={{textDecoration: 'none', paddingTop: '0.5rem' }} to="/projects"><mark className='navbar-txt'>  Portfolio  </mark></NavLink>
            <NavLink style={{textDecoration: 'none', paddingTop: '0.5rem' }} to="/aboutme"><mark className='navbar-txt'>About Me</mark></NavLink>
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
