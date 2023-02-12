import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PortfolioCards } from './PortfolioCards';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Portfolio = () => {

  const projects = [
    {
      title: "React",
      description: "Photo Portfolio",
      imgUrl:"https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/adventures.png"
    },
    {
      title: "React Native",
      description: "La Gringa Loca Art",
      imgUrl: "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/gringa.png"
    },
    {
      title: "Html/bootstrap",
      description: "My portfolio",
      imgUrl: "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/portfolio.png"
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Check out my work</h2>
                <p>Here are a few projects I have designed and created. A react photo portfolio site to showcase travel photos. A react native app featuring the quirky art by La Gringa Loca. And my alternative portfolio website created in html. All three showcase examples of my creativity, fresh ideas, and aestetics.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        <Col>
                        {
                          projects.map((project, index) => {
                            return (
                              <PortfolioCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Col>
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      </section>
  )
}