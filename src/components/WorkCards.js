import { Col, Container, Row } from "react-bootstrap";

export const WorkCards = ({ title, description, imgUrl, URL, intro }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} xl={7}>
          <div className="work-img">
            <a href={URL}>
              <img src={imgUrl} />
            </a>
            <div className="work-img-txt">
              <h4>{title}</h4>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <div className="work-p">
            <h1>{intro}</h1>
            <p>{description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
