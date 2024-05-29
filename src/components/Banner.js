import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/pfp_img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "Web Developer", "Security Analyst"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const [text, setText] = useState('');
    const period = 2000;

    const handleContactClick = () => {
        window.location.href = 'mailto:ezechristian26@vt.edu';
    };


    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to My Portfolio</span>
                    <h1>{"Hi! I'm Kelechi Eze"}</h1>
                    <p>Aspiring Security Engineer and Software Engineer currently studying Computer Science at Virginia Tech with
                      a focus in Cybersecurity. Proficient in Java, Python, C, Linux, Splunk, and Wireshark.
                      Currently interning at Parsons Corporation as a Software Engineering Intern on Cyber Team.
                    </p>
                    <button onClick= {handleContactClick}>Contact Me!<ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img"/>
                </Col>
                </Row>


            </Container>



        </section>
    )
}