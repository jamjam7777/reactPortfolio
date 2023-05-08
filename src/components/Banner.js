import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import mug from "../assets/jpg/mug.jpg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="name">Jamie Devine</span>
            <h1>Welcome</h1>
            <h1>to my Portfolio</h1>
            <p>
              Hi! You found me. I am a fullstack developer, a gamer, foodie, and archaeology nerd. I love networking and meeting people. Currently enjoying creating with react and react native.  
            </p>
            <button
              onClick={() =>
                (window.location = "mailto:jamjamportfolio@gmail.com")
              }
            >
              Let’s Connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={mug}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
