import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

function ServiceDetails() {
  const { id } = useParams();
  const [singleService, setSingleService] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7231/api/Services/services/" + id
        );
        const s = await response.json();
        console.log(s);
        setSingleService(s);
        console.log(singleService);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!singleService) {
    return <p>Loading...</p>;
  }

  return (
    <Row className="m-5">
      <Col xs={12} md={4}>
        <Image src={singleService.image} alt={singleService.name} fluid />
      </Col>

      <Col xs={12} md={8} className="mt-5">
        <h2>{singleService.name}</h2>
        <p>{singleService.description}</p>
        <Button>Contact Expert</Button>
      </Col>
    </Row>
  );
}
export default ServiceDetails;
