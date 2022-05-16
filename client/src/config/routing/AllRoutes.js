import React from "react";
import {
  HomePage,
  AboutPage,
  CartPage,
  DetailsPage,
  CheckoutPage,
} from "../../pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AllRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </>
  );
}
