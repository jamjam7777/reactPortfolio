import { Col, Container, Row } from "react-bootstrap";

export const WorkCards = ({ title, description, imgUrl, URL, intro }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} xl={7}>
          <div className="work-img">
            <a href={URL} target="_blank">
              <img src={imgUrl} />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <div className="project-p">
            <div className="project-header"><h1>{intro}</h1></div>
            <p>{description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
