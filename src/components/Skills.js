import { Container, Col, Row } from "react-bootstrap";

export const Skills = () => 
{
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    };

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
                            
                            <h5> Programming Languages: Java, Python, C, Javascript, HTML, CSS, Node.js, MATLAB</h5><br></br>
                        </div>
                        <div className ="item">
                            
                            <h5>Cloud Developing: AWS, S3, Lambda, API Gateway, IAM, EC2, Cognito, Cloudwatch</h5><br></br>
                        </div>
                        <div className ="item">
                            <h5>Cybersecurity: Linux, Bash, Splunk, Wireshark, Snort, Ubuntu, VMWare, Azure Lab VM</h5>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>



    )


}