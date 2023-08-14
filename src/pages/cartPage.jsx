import React from "react";
import { useCart } from "../context/cartContext";
import { ProductCard } from "../components/productCard/productCard";

export const CartPage = () => {
  const { cartItems, cartMessage } = useCart();
  const itemsInCart = cartItems.length;

  return (
    <div>
      <h1>CartPage</h1>
      <h4>Items in the cart:{itemsInCart}</h4>
      {cartMessage.loading ? (
        <h1>Loading...</h1>
      ) : cartMessage.error ? (
        cartMessage.error
      ) : cartItems.length > 0 ? (
        cartItems.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <h5>No items in the cart</h5>
      )}
    </div>
  );
};
