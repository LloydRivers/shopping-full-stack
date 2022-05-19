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
  // receive product from the onClick handler
  const addToCart = (product) => {
    // set a flag to find if the item exists
    let found = 0;
    // loop over the array
    cartItems.forEach((item, index) => {
      // check if the item exists
      if (item._id === product._id) {
        //it it does exist change the flag
        found = 1;
        // use the setter to increase the quantity
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
    // if it is not in the array, push it in.
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
