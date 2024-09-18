import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/kelelogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/ckelechieze"><img src={navIcon1} alt="linkedin" /></a>
            <a href="https://github.com/KCE14"><img src={navIcon2} alt="github" /></a>
            </div>
            <p>Email: ezekelechi14@gmail.com
               <br></br>Phone Number: 757-572-0052<br></br><br></br>
               Copyright 2024. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}