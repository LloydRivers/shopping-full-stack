import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ShoppingCard({ product }) {
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
        <Link to={`details/${product.id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ShoppingCard;
