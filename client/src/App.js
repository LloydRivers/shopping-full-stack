import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import AllRoutes from "./config/routing/AllRoutes";

function App() {
  return (
    <Container>
      <AllRoutes />
    </Container>
  );
}

export default App;
