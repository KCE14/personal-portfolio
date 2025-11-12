import { Container, Col, Row } from "react-bootstrap";

export const Skills = () => 
{

    return (
        <section className = "skill" id ="skills">
            <Container>
                <Row>
                    <Col>
                        <div className ="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>These are my applicable technical skills related to the tech industry.<br></br>Including but not limited to:</p>
                        <div className ="item">
                            
                            <h5> Languages: Java, Python, C, Javascript, HTML, CSS, Node.js, Assembly, MATLAB</h5><br></br>
                        </div>
                        <div className ="item">
                            
                            <h5>Cloud Developing: AWS, S3, Lambda, API Gateway, IAM, EC2, Cognito, Cloudwatch</h5><br></br>
                        </div>
                        <div className ="item">
                            <h5>Cybersecurity: Linux, Bash, Splunk, Wireshark, Burp Suite, Snort, Ubuntu, VMWare, Azure Lab VM</h5>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>



    )


}