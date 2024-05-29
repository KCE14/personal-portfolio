import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/E.png";
import projImg2 from "../assets/img/ec21.jpg";
import projImg3 from "../assets/img/Screenshot (52).png";


export const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "Web Design and Development",
            imgUrl: projImg1,
            link: "https://github.com/KCE14/personal-portfolio"
        },
        {
            title: "EC2 Remote Access Server",
            description: "Cloud and SSH Configuration",
            imgUrl: projImg2,
            link: "https://github.com/KCE14/EC2Instance"
        },
        {
            title: "AWS S3 Honey Bucket Logs Case",
            description: "Threat Intelligence and Cloud Security",
            imgUrl: projImg3,
            link: "https://github.com/KCE14/CYB102-Milestone"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Here are some projects that I am currently partaking in/completed related to both Software Developing and Cybersecurity.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Stay tuned!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Stay tuned!</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};