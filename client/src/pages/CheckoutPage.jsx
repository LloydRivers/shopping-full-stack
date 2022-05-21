import React, { useContext, useEffect, useState } from "react";
import "../styling/checkout.css";
import { CartContext } from "../App";
import CheckoutPageTable from "../components/card/CheckoutPageTable";
import { roundGrandTotal, totalPrice } from "../utility";

function CheckoutPage() {
  const [cartItems] = useContext(CartContext);
  const [grandTotal, setgrandTotal] = useState(0);
  const [delivery] = useState(4);

  useEffect(() => {
    setgrandTotal(totalPrice(cartItems));
  }, [cartItems]);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="container-fluid mt-4"
      >
        <div className="window">
          <div className="order-info">
            <div className="order-info-content">
              <h2>Order Summary</h2>
              <div className="line"></div>
              {cartItems.map((item) => (
                <CheckoutPageTable key={item._id} item={item} />
              ))}

              <div className="line"></div>
              <div className="total">
                <span style={{ float: "left" }}>
                  <div className="thin dense">VAT 17.5%</div>
                  <div className="thin dense">Delivery</div>
                  TOTAL:
                </span>
                <span style={{ float: "right", textAlign: "right" }}>
                  <div className="thin dense">
                    ${((grandTotal * 17.5) / 100).toFixed(2)}
                  </div>
                  <div className="thin dense">${delivery}</div>
                  {(grandTotal + delivery + (grandTotal * 17.5) / 100).toFixed(
                    2
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="credit-info">
            <div className="credit-info-content">
              <table className="half-input-table">
                <tbody>
                  <tr>
                    <td>Please select your card: </td>
                    <td>
                      <div className="dropdown" id="card-dropdown">
                        <div className="dropdown-btn" id="current-card">
                          Visa
                        </div>
                        <div className="dropdown-select">
                          <ul>
                            <li>Master Card</li>
                            <li>American Express</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <img
                src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
                height="80"
                className="credit-card-image"
                id="credit-card-image"
                alt="tester"
              />
              Card Number
              <input className="input-field" />
              Card Holder
              <input className="input-field" />
              <table className="half-input-table">
                <tbody>
                  <tr>
                    <td>
                      Expires
                      <input className="input-field" />
                    </td>
                    <td>
                      CVC
                      <input className="input-field" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="pay-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
