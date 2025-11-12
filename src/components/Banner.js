import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-2.jpg";

export const Banner = () => {

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
                    <p>Aspiring Security Engineer currently studying Computer Science at Virginia Tech with
                      a focus in Cybersecurity. Proficient in Java, Python, and C. Proficient with tools like 
                      Kali Linux, Splunk, and Wireshark. Previously worked as a Security Engineer Intern at 
                      Capital One.
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