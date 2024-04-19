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
              <p>Hi, I’m Shirley! I'm in my senior year of Computer Science at UWaterloo. I'm interested in graphics, robotics, and AI. My experiences include creating features for digital twining application at the AR startup Interaptix, improving a leading crowd simulation software (MassMotion) at ARUP, and working on the performance of a simulator for the autonomous trucking startup Kodiak Robotics.
              </p>
              </Col>
            </Col>
          </Row>
        </Container>
        );
    }
}

export default AboutMe;