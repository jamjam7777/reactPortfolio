import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);

    return() => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled': ""}>
      <Container>
        {/* <Navbar.Brand href="#home">
            <img src={} alt="Logo"/>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jamie-devine"><FontAwesomeIcon icon={faLinkedin} inverse/> </a>  
              <a href="https://github.com/jamjam7777">
            <FontAwesomeIcon icon={faGithub} inverse/>  </a> 
              <a href="https://discordapp.com/users/953099345329274981">
            <FontAwesomeIcon icon={faDiscord} inverse/>
          </a>  
              <a href="https://www.instagram.com/jamiejdevine/">
            <FontAwesomeIcon icon={faInstagram} inverse/> </a> 
            </div>
            <button className="vvd" onClick={() => console.log()}><span>Say Hello</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}