import { Col } from "react-bootstrap";

export const PortfolioCards = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} md={6} xl={7}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}