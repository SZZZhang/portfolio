import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import projectsJson from '../Assets/projects.json';
import portrait from '../Assets/portrait.png';
import raytracerImg1 from '../Assets/raytracer_img1.jpeg'
import raytracerImg2 from '../Assets/raytracer_img2.jpg'
import raytracerImg3 from '../Assets/raytracer_img3.jpeg'
import raytracerImg4 from '../Assets/raytracer_img4.jpeg'
import planetarySimGif from '../Assets/planetary_sim.gif'
import planetarySimImg from '../Assets/planetary_sim.jpg'
import routeSaferGif from '../Assets/routesafer.gif'
import routeSaferImg from '../Assets/routesafer.jpg'
import popGif from '../Assets/pop.gif'
import popImg from '../Assets/pop.jpg'
import fourierGif from '../Assets/fourier.gif'
import fourierImg from '../Assets/fourier.jpg'
import tabooGif from '../Assets/taboo.gif'
import tabooImg from '../Assets/taboo.png'
import coupGif from '../Assets/coup.gif'
import coupImg from '../Assets/coup.jpg'
import linkIcon from  '../Assets/link_icon.png'

import '../App.css';

// const projects = projectsJson.projects.map((p, idx) => {
//     return {
//         name: p.name,
//         image: require(p.image),
//         description: p.description
//     };
// ffmpeg -i in.mov -pix_fmt rgb8 -r 10 output.gif && gifsicle -O3 output.gif -o output.gif
// })

const project_image = {
    'Raytracer':  
    <Carousel>
        <Carousel.Item>
            <Card.Img className="img-fluid" src={raytracerImg1} />
        </Carousel.Item>
        <Carousel.Item>
            <Card.Img className="img-fluid" src={raytracerImg2} />
        </Carousel.Item>
        <Carousel.Item>
            <Card.Img className="img-fluid" src={raytracerImg3} />
        </Carousel.Item>
        <Carousel.Item>
            <Card.Img className="img-fluid" src={raytracerImg4} />
        </Carousel.Item>
    </Carousel>,
    "Planetary System Simulator":
    <div style={{height:'100%', backgroundColor:'#C5C6C7'}} className='d-flex align-items-center justify-content-center'>
        <Card.Img className="static" src={planetarySimImg} />
        <Card.Img className="img-fluid" src={planetarySimGif} />
    </div>,
    "RouteSafer": 
    <div style={{height:'100%', backgroundColor:'#C5C6C7'}} className='d-flex align-items-center justify-content-center'>
        <Card.Img className="static" src={routeSaferImg} />
        <Card.Img className="img-fluid" src={routeSaferGif} />
    </div>, 
    "POP!": 
    <div>
        <Card.Img className="static" src={popImg} />
        <Card.Img className="img-fluid" src={popGif} />
    </div>, 
    "Fourier Epicycles":
    <div>
        <Card.Img className="static" src={fourierImg} />
        <Card.Img className="img-fluid" src={fourierGif} />
    </div>, 
    "Taboo":
    <div style={{height:'100%', backgroundColor:'#C5C6C7'}} className='d-flex align-items-center justify-content-center'>
        <Card.Img className="static" src={tabooImg} />
        <Card.Img className="img-fluid" src={tabooGif} />
    </div>, 
    "Coup":
    <div style={{height:'100%', backgroundColor:'#C5C6C7'}} className='d-flex align-items-center justify-content-center'>
        <Card.Img className="static" src={coupImg} />
        <Card.Img className="img-fluid" src={coupGif} />
    </div>, 
}

class Projects extends Component {
    render() {
        return (
            <Container style={{paddingLeft: '5rem', paddingRight: '5rem'}}>
                <br/> 
                <div class="card-columns">
                <Row Row xs={2} md={3} className="g-4">
                {
                    projectsJson.projects.map((project, idx) => (
                    <Col key={idx} style={{padding: "1em"}}>
                        <Card style={{height: '100%'}}>
                            <div style={{height: '100%'}}>
                                {project_image[project.name]}
                            </div>
                            <Card.Body>
                            <Card.Title>
                                {project.name} {' '}
                    
                                    <a href={project.link}>
                                <img style={{height:'20px'}} href={project.link} src={linkIcon}/>
                                </a>
                            
                            </Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))
                }
                </Row>
                </div>
            </Container>
        );
    }
}

export default Projects;