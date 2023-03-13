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
              is in business. I have owned my own marketing company where I designed
              websites, and created full marketing packages for clients. I have
              also worked in a large corporation heavily relying on the Oracle/NetSuite
              inventory system. I work well in team environments or throw me in
              a lab and I will solve all of your problems.
            </p>
            <p>
              Some fun facts about me. My Dad is latino and my Mom is from the
              US; I grew up in Chile until I was 18. I used to lead crews of
              archaeology University students at 9,000ft elevation in the
              wilderness of Colorado during Summers...if you have done that you
              can do anything. I make funky colorful art using the pseudoname of "la Gringa"
            </p>
            <p>
              Here are a few development libraries and frameworks I am
              proficient in:
            </p>
            <p>*Javascript   *Bootstrap</p>
            <p>*React   *React Native</p>
            <p>*Node.js   *GitHub</p>
            
           
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