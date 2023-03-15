import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="footer-icons">
              <a href="https://www.linkedin.com/in/jamie-devine" target="_blank"><FontAwesomeIcon icon={faLinkedin} inverse/> </a>  
              <a href="https://github.com/jamjam7777" target="_blank">
            <FontAwesomeIcon icon={faGithub} inverse/>  </a> 
              <a href="https://discordapp.com/users/953099345329274981" target="_blank">
            <FontAwesomeIcon icon={faDiscord} inverse/>
          </a>  
              <a href="https://www.instagram.com/jamiejdevine/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} inverse/> </a> 
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}