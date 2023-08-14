// import React, { createContext, useContext, useReducer } from "react";
import { data } from "../data/data";

import { createContext, useContext, useEffect, useReducer } from "react";

const initialProductState = {
  products: [],
  productMessage: {
    loading: true,
    error: null,
  },
};
const ProductActionTypes = {
  SET_PRODUCT_SUCCESS: "SET_PRODUCT",
  SET_PRODUCT_FAILURE: "SET_PRODUCT_FAILURE",
};
export const fetchProduct = (productDispatch) => {
  try {
    productDispatch({
      type: ProductActionTypes.SET_PRODUCT_SUCCESS,
      payload: {
        products: data,
        productMessage: {
          loading: false,
          error: null,
        },
      },
    });
  } catch (err) {
    productDispatch({
      type: ProductActionTypes.SET_PRODUCT_FAILURE,
      payload: {
        productMessage: {
          loading: false,
          error: "Products could not be fetched",
        },
      },
    });
  }
};
export const productReducer = (
  prevProductstate,
  { type, payload: { products, productMessage } }
) => {
  switch (type) {
    case ProductActionTypes.SET_PRODUCT_SUCCESS:
      return { ...prevProductstate, products, productMessage };
    case ProductActionTypes.SET_PRODUCT_FAILURE:
      return { ...prevProductstate, productMessage };
    default:
      return prevProductstate;
  }
};
const ProductContext = createContext(initialProductState);

const { Provider } = ProductContext;

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  useEffect(() => {
    fetchProduct(productDispatch);
  }, []);
  return (
    <Provider value={{ ...productState, productDispatch }}>{children}</Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
