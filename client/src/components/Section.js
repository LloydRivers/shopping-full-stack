import React from "react";
import ShoppingCard from "./ShoppingCard";
import { Container, Row } from "react-bootstrap";

function Section({ data, title }) {
  return (
    <Container style={{ marginBottom: "2em" }}>
      {/* {data.length > 0 ? <h1>{data.category}</h1> : null} */}
      <h1>{title}</h1>
      <Row>
        {data.map((product) => (
          <div key={product.id} className="col-sm-6  col-md-4 col-lg-3">
            <ShoppingCard className="line-clamp" product={product} />
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Section;
