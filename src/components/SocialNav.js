
import { Container } from "react-bootstrap";
import { Nav } from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";



export const SocialNav = () => {
    return (
       <Container className="socialNav">
      <div>
      <Nav vertical>
      <a><FontAwesomeIcon icon="faStar" /></a>  
      </Nav>
      </div>
      <div className="social-icon">
      <Nav vertical>
    <a href="https://www.linkedin.com/in/jamie-devine" target="_blank"><FontAwesomeIcon icon={faLinkedin} inverse/> </a>  
    </Nav>
    <Nav vertical>
    <a href="https://github.com/jamjam7777" target="_blank">
  <FontAwesomeIcon icon={faGithub} inverse/>  </a> 
  </Nav>
  <Nav vertical>
    <a href="https://discordapp.com/users/953099345329274981" target="_blank">
  <FontAwesomeIcon icon={faDiscord} inverse/>
</a>  
</Nav>
<Nav vertical>
    <a href="https://www.instagram.com/jamiejdevine/" target="_blank">
  <FontAwesomeIcon icon={faInstagram} inverse/> </a> 
  </Nav>
  </div>
  </Container>
  
    )
};

export default SocialNav;