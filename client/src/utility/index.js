//use es6

export const totalPrice = (arr) => {
  let totalPrice = 0;

  for (let i = 0; i < arr.length; i++) {
    totalPrice = totalPrice + Number(arr[i].price) * arr[i].quantity;
  }
  return totalPrice;
};
export const roundNumber = (price, quantity) => {
  return Math.round(price * Number(quantity) * 100) / 100;
};
export const roundGrandTotal = (price) => {
  return Math.round(price * 100) / 100;
};
