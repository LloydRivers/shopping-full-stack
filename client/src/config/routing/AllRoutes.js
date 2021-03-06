import React from "react";
import {
  HomePage,
  AboutPage,
  CartPage,
  DetailsPage,
  CheckoutPage,
} from "../../pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../../pages/Navigation";

export default function AllRoutes() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}
