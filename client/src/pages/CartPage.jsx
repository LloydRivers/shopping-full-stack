import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import "../styling/cart-page.css";
import CartCard from "../components/card/CartCard";

function CartPage() {
  const [cartItems] = useContext(CartContext);

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
                          cartItems.map((item) => <CartCard item={item} />)
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
                          <h5 className="text-uppercase">items 3</h5>
                          <h5>€ 132.00</h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Shipping</h5>

                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Enter your code
                            </label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>€ 137.00</h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
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
