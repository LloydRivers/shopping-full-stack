import React from "react";

function CheckoutPageTable({ item }) {
  console.log(item);
  return (
    <table className="order-table mt-2">
      <tbody>
        <tr>
          <td>
            <img src={item.image} className="full-width" alt="testing" />
          </td>
          <td>
            <br /> <span className="thin">{item.title}.</span>
            <br />
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <div className="price">${item.quantity * item.price}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CheckoutPageTable;
