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
  // I tried to implement useConext to stop prop drilling
  // Look in CartCard.js on line 23, you will see I have the item.quantity. What I want to happen is, when a user click the add to cart button, it goes to the cart page, but if they click add t cart twice, I want to update the quantity instead of having 2 rows in there with the same product.

  // what I need to do
  // {id: count}
  //Need to have a quantity property
  //If a product already exists in cart, then increment its quantity

  // ^^^^^^ what I need to do

  // what I have tried is below
  // const addToCart = (product) => {
  //   cartItems.forEach((item) => {
  //     console.log(item);
  //     if (item._id === product._id) {
  //       setCartItems(
  //         cartItems.map((item2) => {
  //           if (item2._id === product.id) {
  //             return { ...item2, quantity: product.quantity + 1 };
  //           } else return item2;
  //         })
  //       );
  // item.quantity = item.quantity + 1;
  // setCartItems([
  //   ...cartItems,
  //   { ...product, quantity: product.quantity + 1 },
  // ]);
  //   } else {
  //     setCartItems([...cartItems, product]);
  //   }
  // });
  // let newProduct = { ...product, quantity: 1 };
  // setCartItems(
  //   cartItems.map((item) => {
  //     if (item.id === product.id) {
  //       item.quantity++;
  // return item
  //     }
  // else {
  //
  // }
  //   })
  // );
  //iF AN ITEM exists, increment item.quantity, otherwise add a new item

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
          {/* When I click this button it needs to go to the cart page the function is at the top */}
          <CartButton onClick={() => setCartItems(product)}>
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
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
