import React from "react";
import { useProduct } from "../context/productContext";
import { ProductCard } from "../components/productCard/productCard";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
export const ProductsPage = () => {
  const { products, productMessage } = useProduct();
  const { cartItems } = useCart();

  return (
    <div>
      <h1>ProductsPage</h1>
      <Link to="/cart">Cart Page:{cartItems?.length}</Link>
      {productMessage.loading ? (
        <h1>Loading</h1>
      ) : productMessage.error ? (
        productMessage.error
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};
