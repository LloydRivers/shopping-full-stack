import React from "react";
import ShoppingCard from "./ShoppingCard";
import { Container, Row } from "react-bootstrap";

function Section({ data, title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Row>
        {data.map((product) => (
          <div
            style={{}}
            key={product._id}
            className="col-sm-6  col-md-6 col-lg-3 mb-3"
          >
            <ShoppingCard className="line-clamp" product={product} />
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Section;
