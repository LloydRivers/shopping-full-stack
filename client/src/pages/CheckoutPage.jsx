import React from "react";
import "../styling/checkout.css";
function CheckoutPage() {
  return (
    <>
      <div className="container">
        <div className="window">
          <div className="order-info">
            <div className="order-info-content">
              <h2>Order Summary</h2>
              <div className="line"></div>
              <table className="order-table">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG"
                        className="full-width"
                        alt="testing"
                      />
                    </td>
                    <td>
                      <br /> <span className="thin">Nike</span>
                      <br /> Free Run 3.0 Women
                      <br />{" "}
                      <span className="thin small">
                        {" "}
                        Color: Grey/Orange, Size: 10.5
                        <br />
                        <br />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="price">$99.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="line"></div>
              <table className="order-table">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://dl.dropboxusercontent.com/s/qbj9tsbvthqq72c/Vintage-20L-Backpack-by-Fj%C3%A4llr%C3%A4ven.jpg"
                        className="full-width"
                        alt="test3"
                      />
                    </td>
                    <td>
                      <br /> <span className="thin">Fjällräven</span>
                      <br />
                      Vintage Backpack
                      <br />{" "}
                      <span className="thin small">
                        {" "}
                        Color: Olive, Size: 20L
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="price">$235.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="line"></div>
              <table className="order-table">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg"
                        className="full-width"
                        alt="test1"
                      />
                    </td>
                    <td>
                      <br /> <span className="thin">Monobento</span>
                      <br />
                      Double Lunchbox
                      <br />{" "}
                      <span className="thin small">
                        {" "}
                        Color: Pink, Size: Medium
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="price">$25.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="line"></div>
              <div className="total">
                <span style={{ float: "left" }}>
                  <div className="thin dense">VAT 19%</div>
                  <div className="thin dense">Delivery</div>
                  TOTAL
                </span>
                <span style={{ float: "right", textAlign: "right" }}>
                  <div className="thin dense">$68.75</div>
                  <div className="thin dense">$4.95</div>
                  $435.55
                </span>
              </div>
            </div>
          </div>
          <div className="credit-info">
            <div className="credit-info-content">
              <table className="half-input-table">
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
                <tr>
                  <td>
                    {" "}
                    Expires
                    <input className="input-field" />
                  </td>
                  <td>
                    CVC
                    <input className="input-field" />
                  </td>
                </tr>
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
