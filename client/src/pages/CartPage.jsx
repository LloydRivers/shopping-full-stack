import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import "../styling/cart-page.css";
import CartCard from "../components/card/CartCard";
import { totalPrice } from "../utility";
import { roundGrandTotal } from "../utility";

function CartPage() {
  const navigate = useNavigate();
  const [cartItems] = useContext(CartContext);
  const [grandTotal, setgrandTotal] = useState(0);

  useEffect(() => {
    setgrandTotal(totalPrice(cartItems));
  }, [cartItems]);

  const proceedToCheckout = () => {
    navigate("/checkout"); //window.location.href = '/checkout'
  };
  return (
    <>
      <section className="h-custom">
        <div className="container ">
          <div className=" row d-flex justify-content-center align-items-center ">
            <div className="col-12 p-0">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "0 0 15px 15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cartItems.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {cartItems.length ? (
                          cartItems.map((item) => (
                            <CartCard key={item._id} item={item} />
                          ))
                        ) : (
                          <h5>Cart empty</h5>
                        )}

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            items: {cartItems.length}
                          </h5>
                          <h5>${roundGrandTotal(grandTotal)}</h5>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>${roundGrandTotal(grandTotal)}</h5>
                        </div>
                        <button
                          disabled={cartItems.length ? false : true}
                          type="button"
                          onClick={proceedToCheckout}
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
