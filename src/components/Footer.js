import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/github-brands.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/rijulJain25"><img src={navIcon4} alt="" /></a>
              <a href="https://www.linkedin.com/in/rijul-jain-924aa6218/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/rijul.jain.5454/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/its_rijul_kj?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
