import React, { useContext } from "react";
import { CartContext } from "../../App";

import { Link } from "react-router-dom";
import {
  CardBody,
  CardImage,
  CardContainer,
  CardTitle,
  ImageContainer,
  Span,
  CartButton,
} from "./Card.styled";

function ShoppingCard({ product }) {
  const [cartItems, setCartItems] = useContext(CartContext);

  const addToCart = (product) => {
    let found = 0;
    cartItems.forEach((item, index) => {
      if (item._id === product._id) {
        found = 1;
        setCartItems(
          cartItems.map((item) => {
            if (item._id === product._id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return { ...item };
            }
          })
        );
      }
    });

    if (found === 0) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <CardContainer>
        <Link to={`details/${product._id}`}>
          <ImageContainer>
            <CardImage src={product.image} />
          </ImageContainer>
        </Link>
        <CardBody>
          <Span backgroundColor="#f9eeea" padding="2px 4px">
            NEW VIP OFFER
          </Span>
          <Span isBlock={true}>${product.price}</Span>
          <CardTitle className="line-clamp">{product.title}</CardTitle>

          <CartButton onClick={() => addToCart(product)}>
            add to cart
          </CartButton>
          <div className="review-rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default ShoppingCard;
