import React, { Component, useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import {NavLink} from 'react-router-dom'

function Home() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationContainer.current, // the dom element that will contain the animation
      animationData: require('../Assets/animationData.json'), // the animation data
      renderer: 'svg',
      loop: false,
      autoplay: true,
    });

    return () => instance.destroy();
  },[])

    return (
      <div>
         <Container className='d-flex align-items-center' style={{minHeight: '90vh'}}>
          <Col>
            <Row Row xs={1} md={3} className="g-4">
                <Col></Col>
                <Col>
                <div ref={animationContainer}/>
                </Col>
                <Col></Col>
            </Row>
          
          <h1 id="hello-txt">Hi. I'm Shirley Zhang</h1>
          <NavLink style={{textDecoration: 'none' }} to="/projects">
            <mark id="portfolio-txt">Portfolio</mark>
          </NavLink>
          <NavLink style={{textDecoration: 'none' }} to="/aboutme">
            <mark id="about-me-txt">About me</mark>
          </NavLink>
          </Col>
        </Container>
      </div>
    );

}

Home.propTypes = {};

export default Home;