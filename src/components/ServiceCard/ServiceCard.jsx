import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";

function ServiceCard({ service }) {
  const navigate = useNavigate();
  function handleCardClick() {
    console.log("Card ", service.id, "clicked");
    navigate('/service/'+service.id);
  }

  return (
    <Card style={{ width: "30rem" }} className="m-3" onClick={handleCardClick}>
      <Card.Img
        variant="top"
        src={service.image}
        className="img-fluid-height img-fluid"
      />
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}
export default ServiceCard;
