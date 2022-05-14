import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ShoppingCard({ product }) {
  const navigate = useNavigate();

  const navigateToDetailsPage = async () => {
    navigate("");
  };

  return (
    <Card style={{ width: "250px" }}>
      <Card.Img
        style={{
          objectFit: "cover",
          height: "200px",
          width: "100%",
          margin: "0 auto",
        }}
        variant="top"
        src={product.image}
      />
      <Card.Body>
        <Card.Title className="line-clamp">{product.title}</Card.Title>
        <Card.Text className="line-clamp">{product.description}</Card.Text>
        <Button onClick={navigateToDetailsPage} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ShoppingCard;
