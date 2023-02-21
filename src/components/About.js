import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about" id="About">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>About Me</h1>
            <p>
              What can I say? Graduated from a fullstack bootcamp. My background
              is in business. I have owned my own marketing company and designed
              websites, and designed full marketing packages for clients. I have
              also worked in a large corporation heavily relying on the Oracle
              inventory system. I work well in team environments or throw me in
              a lab and I will solve problems.
            </p>
            <p>
              Some fun facts about me. My Dad is latino and my Mom is from the
              US, I grew up in Chile until I was 18. I used to lead crews of
              archaeology University students at 9,000ft elevation in the
              wilderness of Colorado during Summers, if you have done that you
              can do anything. The art found in React Native app is mine, I am
              La Gringa.
            </p>
            <p>
              Here are a few development libraries and frameworks I am
              proficient in:
            </p>
            <p>Javascript</p>
            <p>bootstrap</p>
            <p>React</p>
            <p>React Native</p>
            <p>Node.js</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src="https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/archy.jpg"
              className="about-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;