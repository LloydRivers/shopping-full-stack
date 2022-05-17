import React, { useState } from "react";

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
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (id) => {
    setCartItem(id);
  };
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
        <button onClick={() => addToCart(product.id)}>+</button>
        <div class="review-rating">
          <i class="fa-regular fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </CardContainer>
    </Link>
  );
}

export default ShoppingCard;
