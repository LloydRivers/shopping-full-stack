import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import AllRoutes from "./config/routing/AllRoutes";

export const CartContext = React.createContext();
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Container>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <AllRoutes />
      </CartContext.Provider>
    </Container>
  );
}

export default App;
