import { Col } from "react-bootstrap";

export const PortfolioCards = ({ title, description, imgUrl, URL }) => {
  return (
    <Col size={12} md={6} xl={7}>
      <div className="proj-imgbx">
        <a href={URL}><img src={imgUrl}/></a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}