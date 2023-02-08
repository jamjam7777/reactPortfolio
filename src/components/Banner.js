import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";



export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="name">Jamie Devine</span>
                <h1>Welcome</h1>
                <h1>to my Portfolio</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
                  <img src="https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/mug.jpg" alt="Header Img"/>  
          </Col>
        </Row>
      </Container>
    </section>
  )
};