import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}

export default App;
