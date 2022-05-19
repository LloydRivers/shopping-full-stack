import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AllRoutes from "./config/routing/AllRoutes";

export const CartContext = React.createContext();
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      <AllRoutes />
    </CartContext.Provider>
  );
}

export default App;
