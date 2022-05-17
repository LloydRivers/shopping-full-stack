import React from "react";

import { Link } from "react-router-dom";
import {
  CardBody,
  CardImage,
  CardContainer,
  CardTitle,
  ImageContainer,
  Span,
} from "./Card.styled";

function ShoppingCard({ product }) {
  return (
    <Link to={`details/${product._id}`}>
      <CardContainer>
        <ImageContainer>
          <CardImage src={product.image} />
        </ImageContainer>

        <CardBody>
          <Span backgroundColor="#f9eeea" padding="2px 4px">
            NEW VIP OFFER
          </Span>
          <Span isBlock={true}>{product.price}</Span>
          <CardTitle className="line-clamp">{product.title}</CardTitle>
        </CardBody>
      </CardContainer>
    </Link>
  );
}

export default ShoppingCard;
