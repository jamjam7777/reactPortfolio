import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);

    return() => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar collapseOnSelect expand="sm" variant='dark' className={scrolled ? 'scrolled': ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Portfolio" className={activeLink === 'Work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Portfolio')}>Work</Nav.Link>
            <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
          </Nav>
          <Nav.Link>
          <a className="email-link" onClick={() => window.location = 'mailto:jamjamportfolio@gmail.com'} style={{ textDecoration: 'none' }} >
Say Hello</a></Nav.Link>   
        </Navbar.Collapse>
  </Container>
    </Navbar>
    )
} 