import { Col, Container, Row } from "react-bootstrap";

export const WorkCards = ({ title, description, src, URL }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} xl={6}>
          <div className="work-img" >
            <a href={URL} target="_blank">
              <img src={src} />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} xl={6}>
          <div className="work-p">
            <div><h1>{title}</h1></div>
            <p>{description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
