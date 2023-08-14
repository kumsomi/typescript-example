import React from "react";
import { cartActionTypes, useCart } from "../../context/cartContext";
import { Link, useLocation } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { cartItems, cartDispatch } = useCart();

  const location = useLocation();
  const itemInCart = cartItems.find((cartItem) => cartItem._id === product._id);
  const removeFromCart = (e) => {
    e.preventDefault();
    const inCart = cartItems.filter((cartItem) => cartItem._id !== product._id);
    cartDispatch({
      type: cartActionTypes.REMOVE_CART_ITEM,
      payload: { cartItems: inCart, cartMessage: { loading: false } },
    });
  };
  const addToCart = (e) => {
    e.preventDefault();
    cartDispatch({
      type: cartActionTypes.SET_CART_ITEM,
      payload: {
        cartItems: product,
        cartMessage: {
          loading: false,
        },
      },
    });
  };
  return (
    <div
      key={product._id}
      style={{
        border: "1px solid",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h4>{product.title}</h4>
      by {product.author}
      <div>$ {product.price}</div>
      <span
        style={{
          backgroundColor: "#cfcfea",
          padding: "4px",
          borderRadius: "10px",
        }}
      >
        {product.categoryName}
      </span>
      {location.pathname === "/cart" ? (
        <button onClick={removeFromCart}>Remove from Cart</button>
      ) : itemInCart ? (
        <Link to="/cart">Go to Cart</Link>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};
