import { Container, Row, Col } from "react-bootstrap";
import { WorkCards } from "./WorkCards";
import "animate.css";

export const Work = () => {
  const projects = [
    {
      title: "Adventuretime Gallery",
      URL: "https://jamjam7777.github.io/jamjamadventures/",
      imgUrl:
        "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/adventures.png",
      intro: "React Travel Photo Project",
      description: "Designed a react website that highlights travel photos. This site has a clean feel, is easy to navigate, and minimalistic in its aesthetics. Easy to move between photos, with a simple socials link in the footer.",
    },
    {
      title: "La Gringa Art",
      URL: "https://www.etsy.com/shop/TheGringaLoca?ref=seller-platform-mcnav",
      imgUrl:
        "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/gringa.png",
        intro: "La Gringa Art Project",
      description: "Still under construction, this react native app will showcase the art of La Gringa, to further promote en Etsy store. This app will be easy to navigate, colorful, with a dash of whimsy. It will have interactive elements and a fun activity to add to this colorful art.",
    },
    {
      title: "Html/bootstrap",
      URL: "https://jamjam7777.github.io/jamjamportfolio",
      imgUrl:
        "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/portfolio.png",
        intro: "The OG Portfolio Project",
      description: "Original portfolio design, exclusively in html/bootstrap. This project had the challenges of formatting from large to small screens, and a full jpeg background. Colorful yet simple, this website it easy to navigate",
    },
  ];

  return (
    <section className="work" id="work">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Check out my work</h2>
            <p>
              Here are a few projects I have designed and created. A react photo
              portfolio site to showcase travel photos. A react native app
              featuring the quirky art by La Gringa Loca. And my alternative
              portfolio website created in html. All three showcase examples of
              my creativity, fresh ideas, and aestetics.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {projects.map((project, index) => {
              return <WorkCards key={index} {...project} />;
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;