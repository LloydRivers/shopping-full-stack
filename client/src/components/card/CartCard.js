import React, { useContext } from "react";
import { CartContext } from "../../App";
import { roundNumber } from "../../utility";

function CartCard({ item }) {
  const [cartItems, setCartItems] = useContext(CartContext);

  const changeQuantity = (id, e) => {
    setCartItems(
      cartItems.map((cartitem) => {
        if (cartitem._id === id) {
          return { ...cartitem, quantity: e.target.value };
        } else {
          return { ...cartitem };
        }
      })
    );
  };
  const removeProduct = (productId) => {
    setCartItems(
      cartItems.filter((item) => {
        return item._id !== productId;
      })
    );
  };
  return (
    <>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={item.image}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h5 className="text-black mb-0">{item.title}</h5>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <input
            id="form1"
            min="0"
            name="quantity"
            value={item.quantity}
            onChange={(e) => changeQuantity(item._id, e)}
            type="number"
            className="form-control form-control-sm"
          />
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">${roundNumber(item.price, item.quantity)}</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <i
            onClick={() => removeProduct(item._id)}
            className="fas fa-times"
          ></i>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
}

export default CartCard;
