
import { Container } from "react-bootstrap";
import { Nav } from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";



export const SocialNav = () => {
    return (
       
      <Container className="SocialNav">
    <div className="social-icon">
      <nav vertical>
    <a href="https://www.linkedin.com/in/jamie-devine"><FontAwesomeIcon icon={faLinkedin} inverse/> </a>  
    </nav>
    <nav vertical>
    <a href="https://github.com/jamjam7777">
  <FontAwesomeIcon icon={faGithub} inverse/>  </a> 
  </nav>
  <nav vertical>
    <a href="https://discordapp.com/users/953099345329274981">
  <FontAwesomeIcon icon={faDiscord} inverse/>
</a>  
</nav>
<nav vertical>
    <a href="https://www.instagram.com/jamiejdevine/">
  <FontAwesomeIcon icon={faInstagram} inverse/> </a> 
  </nav>
  </div>
  </Container>
  
    )
}