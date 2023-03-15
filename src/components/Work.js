import { Container, Row, Col } from "react-bootstrap";
import { WorkCards } from "./WorkCards";
import "animate.css";

export const Work = () => {
  const projects = [
    {
      URL: "https://jamjam7777.github.io/jamjamadventures/",
      imgUrl:
        "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/adventures.png",
      title: "Photo Gallery",
      description: "Designed a React website that highlights travel photos. This site has a clean feel, is easy to navigate, and minimalistic in its aesthetics. Easy to move between photos, with a simple socials link in the footer.",
    },
    {
      URL: "https://snack.expo.dev/@jamjam77/github.com-jamjam7777-mood-words?platform=ios",
      imgUrl:
        "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/mood-words.png",
      title: "Mood Words App",
      description: "This React Native app was inspired by affirmations. We all need a good affirmation, but it not always meshes with our current mood. I created an app that gives you an affiramtion based on your mood. Easy to navigate, simple calming colors, and added a function to set reminders or have the affirmation as a widget on your phone",
    },
    {
      URL: "https://jamjam7777.github.io/LaGringa/",
      imgUrl:
        "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/gringa.png",
        title: "La Gringa Art",
      description: "Still under construction, this React site will showcase the art of La Gringa, to further promote the Etsy store. The site will be easy to navigate, colorful, with a dash of whimsy. It will have interactive elements and a fun activity to add to this colorful art.",
    },
    {
      URL: "https://jamjam7777.github.io/jamjamportfolio",
      imgUrl:
        "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/portfolio.png",
        title: "OG Portfolio",
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
              portfolio site to showcase travel photos. An affirmations app depending on your mood. A react site featuring the quirky art by La Gringa Loca. And my alternative
              portfolio website created in html (don't judge I was a newbie...we all get better, right?). All three showcase examples of
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