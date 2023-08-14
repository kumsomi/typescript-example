import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        background: "yellow",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};
