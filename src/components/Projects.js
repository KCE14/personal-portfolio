import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/E.png";
import projImg2 from "../assets/img/cyb-homelab.jpg";
import projImg3 from "../assets/img/Screenshot (52).png";
import projImg4 from "../assets/img/scripting.jpeg";
import projImg5 from "../assets/img/medium-art.png";
import projImg6 from "../assets/img/ec21.jpg";


export const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "Web Design and Development",
            imgUrl: projImg1,
            link: "https://github.com/KCE14/personal-portfolio"
        },
        {
            title: "Cloud Cybersecurity Homelab",
            description: "Terraform Infrastructure",
            imgUrl: projImg2,
            link: "https://github.com/KCE14/cloud-security-homelab"
        },
        {
            title: "AWS S3 Honey Bucket Logs Case",
            description: "Threat Intelligence and Cloud Security",
            imgUrl: projImg3,
            link: "https://github.com/KCE14/CYB102-Milestone"
        },
    ];

    const projects2 = [
        {
            title: "Scripting Exercises",
            description: "Threat Automation and Scripting",
            imgUrl: projImg4,
            link: "https://github.com/KCE14/Scripting-Exercises"
        },

        {
            title: "Medium Writeups",
            description: "General Security and OSINT",
            imgUrl: projImg5,
            link: "https://github.com/KCE14/medium-writeups"
        },
        {
            title: "EC2 Remote Access Server",
            description: "Cloud and SSH Configuration",
            imgUrl: projImg6,
            link: "https://github.com/KCE14/EC2Instance"
        },
    ]

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
                                    <Row>
                                        {projects2.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
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