import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import portrait from "../Assets/portrait.png"


class AboutMe extends Component {
    render() {
        return (
        <Container >
          <Row Row xs={2}>
              <img style={{padding:'3em'}}src={portrait} />
            <Col className='d-flex align-items-center'>
                <Col>
              <h1>About Me</h1>
              <p>Hi, I’m Shirley! I'm in my senior year of Computer Science at the University of Waterloo. I'm interested in graphics, robotics, and AI. My experiences include working on an autonomous trucking simulator at Kodiak Robotics, improving a leading crowd simulation software (MassMotion) at ARUP, and creating features for a digital twining application at the AR startup Interaptix. </p>
              </Col>
            </Col>
          </Row>
        </Container>
        );
    }
}

export default AboutMe;